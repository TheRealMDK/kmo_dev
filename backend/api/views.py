from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response

class CategoryViewset(viewsets.ViewSet):

    permission_classes = [permissions.AllowAny]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_serializer_context(self):
        return {'request': self.request}

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True, context=self.get_serializer_context())
        return Response(serializer.data)

class CharacteristicViewset(viewsets.ViewSet):

    permission_classes = [permissions.AllowAny]
    # permission_classes = [permissions.IsAuthenticated]
    queryset = Characteristic.objects.all()
    serializer_class = CharacteristicSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

class ProductViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_serializer_context(self):
        return {'request': self.request}

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True, context=self.get_serializer_context())
        return Response(serializer.data)

