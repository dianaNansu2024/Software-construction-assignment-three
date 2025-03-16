# users/tests/test_auth.py

import pytest
from django.urls import reverse
from rest_framework.test import APIClient
from django.contrib.auth.models import User

# Enable Django database access in tests
pytestmark = pytest.mark.django_db


class TestAuthAPI:

    def setup_method(self):
        self.client = APIClient()

    def test_user_registration(self):
        url = reverse('register')  # URL name defined in urls.py
        data = {
            "username": "Nina",
            "email": "nina@gmail.com",
            "password": "1234"
        }
        response = self.client.post(url, data, format='json')

        assert response.status_code == 201
        assert User.objects.filter(username='testuser').exists()
        assert 'token' in response.data  # Check if token is returned

    def test_user_login(self):
        # Create a user to login
        User.objects.create_user(username='testuser', email='test@example.com', password='TestPass123')

        url = reverse('login')
        data = {
            "username": "Nina",
            "password": "1234"
        }
        response = self.client.post(url, data, format='json')

        assert response.status_code == 200
        assert 'token' in response.data  # Token should be returned

    def test_login_invalid_credentials(self):
        User.objects.create_user(username='testuser', email='test@example.com', password='TestPass123')

        url = reverse('login')
        data = {
            "username": "testuser",
            "password": "WrongPass"
        }
        response = self.client.post(url, data, format='json')

        assert response.status_code == 400
        assert 'non_field_errors' in response.data
