
from rest_framework import serializers
from .models import *
from rest_framework.response import Response
from rest_framework import status


class ProjectSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Project
        fields = '__all__'


    
class ProjectAdminSerializer(serializers.ModelSerializer):
    project = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = ProjectAdmin
        fields = '__all__'

    

class UserProjectSerailizer(serializers.ModelSerializer):
    project = serializers.StringRelatedField(read_only=True)
    user = serializers.StringRelatedField(read_only=True)
    class Meta:
        model =  UserProject
        fields = '__all__'


class ProjectDetailSerializer(ProjectSerializer):
    admins = ProjectAdminSerializer(many=True)
    users = UserProjectSerailizer(many=True)



class ApproveProjectSerializer(serializers.Serializer):
    user = serializers.StringRelatedField(read_only=True)
    project = serializers.StringRelatedField(read_only=True)
    status = serializers.CharField(read_only=True)

    def update(self, instance, validated_data):
        instance.approveRequest(user=validated_data['user'])
        return instance