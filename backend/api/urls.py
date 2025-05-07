from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('category', CategoryViewset, basename='category')
router.register('characteristic', CharacteristicViewset, basename='characteristic')
router.register('product', ProductViewset, basename='product')

urlpatterns = router.urls
