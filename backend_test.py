import requests
import sys
import json
from datetime import datetime

class SuiteEssentialsAPITester:
    def __init__(self, base_url="https://suite-essentials-hub.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, validate_response=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            response_data = {}
            
            try:
                response_data = response.json()
            except:
                response_data = {"raw_response": response.text}

            if success:
                # Additional validation if provided
                if validate_response and not validate_response(response_data):
                    success = False
                    print(f"❌ Failed - Response validation failed")
                else:
                    self.tests_passed += 1
                    print(f"✅ Passed - Status: {response.status_code}")
                    if response_data:
                        print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")

            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response_data": response_data
            })

            return success, response_data

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": "ERROR",
                "success": False,
                "error": str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        def validate_root(response):
            return "message" in response and "Suite Essentials API" in response["message"]
        
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "api/",
            200,
            validate_response=validate_root
        )

    def test_create_inquiry(self):
        """Test creating an inquiry"""
        test_inquiry = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "email": f"test{datetime.now().strftime('%H%M%S')}@example.com",
            "phone": "+91 9876543210",
            "hotel_name": "Test Hotel",
            "city": "Mumbai",
            "categories": ["guest-room", "kitchen"],
            "message": "This is a test inquiry for API testing."
        }

        def validate_inquiry(response):
            required_fields = ["id", "name", "email", "message", "created_at"]
            return all(field in response for field in required_fields)

        success, response = self.run_test(
            "Create Inquiry",
            "POST",
            "api/inquiries",
            200,
            data=test_inquiry,
            validate_response=validate_inquiry
        )
        
        return success, response.get('id') if success else None

    def test_get_inquiries(self):
        """Test getting all inquiries"""
        def validate_inquiries(response):
            return isinstance(response, list)

        return self.run_test(
            "Get All Inquiries",
            "GET",
            "api/inquiries",
            200,
            validate_response=validate_inquiries
        )

    def test_invalid_inquiry(self):
        """Test creating inquiry with missing required fields"""
        invalid_inquiry = {
            "name": "Test User",
            # Missing email and message (required fields)
        }

        return self.run_test(
            "Create Invalid Inquiry (Missing Required Fields)",
            "POST",
            "api/inquiries",
            422,  # FastAPI returns 422 for validation errors
            data=invalid_inquiry
        )

def main():
    print("🚀 Starting Suite Essentials API Tests")
    print("=" * 50)
    
    # Setup
    tester = SuiteEssentialsAPITester()
    
    # Test 1: Root endpoint
    print("\n📍 Testing Basic API Connectivity...")
    root_success, _ = tester.test_root_endpoint()
    
    if not root_success:
        print("\n❌ Root API endpoint failed. Backend may not be running properly.")
        print("🛑 Stopping tests due to connectivity issues.")
        return 1

    # Test 2: Create inquiry
    print("\n📝 Testing Inquiry Creation...")
    create_success, inquiry_id = tester.test_create_inquiry()
    
    # Test 3: Get inquiries
    print("\n📋 Testing Inquiry Retrieval...")
    get_success, inquiries = tester.test_get_inquiries()
    
    # Test 4: Invalid inquiry
    print("\n🚫 Testing Invalid Inquiry Handling...")
    invalid_success, _ = tester.test_invalid_inquiry()

    # Print results
    print("\n" + "=" * 50)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 50)
    print(f"Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    # Detailed results
    print("\n📋 Detailed Results:")
    for result in tester.test_results:
        status = "✅ PASS" if result["success"] else "❌ FAIL"
        print(f"  {status} - {result['name']}")
        if not result["success"] and "error" in result:
            print(f"    Error: {result['error']}")
    
    # Check if critical functionality works
    critical_tests = [root_success, create_success, get_success]
    if all(critical_tests):
        print("\n🎉 All critical API endpoints are working!")
        return 0
    else:
        print("\n⚠️  Some critical API endpoints failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())