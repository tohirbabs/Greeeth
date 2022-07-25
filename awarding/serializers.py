from rest_framework import serializers
from .models import Award

class AwardSerializer(serializers.ModelSerializer):
    updated_by = serializers.StringRelatedField(read_only=True)
    class Meta:
        model = Award
        fields = '__all__'


class AwardEditSerializer(serializers.ModelSerializer):
    name = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Award
        fields = ['name','points']