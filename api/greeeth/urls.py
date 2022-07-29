"""greeeth URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_swagger.views import get_swagger_view
from rest_framework.routers import SimpleRouter
from projects.views import *
schema_view = get_swagger_view(title='Greeeth API')


router = SimpleRouter()
router.register('projectdetails',viewset=ProjectDetails,basename="project_details")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/',include('authentication.urls')),
    path('trees/',include('trees.urls')),
    path('maintainance/',include('maintainance.urls')),
    path('projects/',include('projects.urls')),
    path('treeshare/',include('treeshare.urls')),
    path('docs/', schema_view),
    path('',include(router.urls)),
    path('awards/',include('awarding.urls'))
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
