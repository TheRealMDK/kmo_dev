from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class CharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characteristic
        fields = "__all__"

class ProductSerializer(serializers.ModelSerializer):
    web_identifier = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    category = serializers.CharField(source='category.title')

    class Meta:
        model = Product
        fields = "__all__"

    def get_web_identifier(self, obj):
        return obj.web_identifier

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None
