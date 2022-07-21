from django.shortcuts import get_object_or_404, render
from rest_framework.generics import ListCreateAPIView,CreateAPIView,RetrieveAPIView,UpdateAPIView
from rest_framework.viewsets import ReadOnlyModelViewSet
from .serializers import *
from .models import *

# Create your views here.


class ProjectListCreate(ListCreateAPIView):
    serializer_class = ProjectSerializer
    
    def get_queryset(self):
        return self.request.user.projects_created.filter(status='active')

    def perform_create(self,serializer):
        serializer.save(created_by=self.request.user)


class ProjectDetails(ReadOnlyModelViewSet):
    serializer_class = ProjectDetailSerializer
    queryset = Project.objects.all()


class AssignAdministrators(ListCreateAPIView):
    serializer_class = ProjectAdminSerializer

    def get_queryset(self):
        return get_object_or_404(Project,pk=self.kwargs['project']).admins.all()

    def perform_create(self,serailizer):
        serailizer.save(project=get_object_or_404(Project,pk=self.kwargs['project']))


class UserProjectAdd(CreateAPIView):
    serializer_class = UserProjectSerailizer
    queryset = UserProject.objects.all()

    def perform_create(self,serializer):
        serializer.save(project=get_object_or_404(Project,pk=self.kwargs['project']),user=self.request.user)

class ApproveProject(UpdateAPIView):
    serializer_class = ApproveProjectSerializer
    queryset = UserProject.objects.all()
    
    def get_obj (self):
        return get_object_or_404(UserProject,pk=self.kwargs['pk'])

    def perform_update(self, serializer):
       serializer.save(user=self.request.user)
       if serializer.is_valid():
            return Response({"message":"Successfully Approved"},status=status.HTTP_200_OK)


