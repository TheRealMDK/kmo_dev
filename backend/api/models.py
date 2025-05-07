from django.db import models

class Category(models.Model):
    title = models.CharField(unique=True, max_length=255)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

class Characteristic(models.Model):
    title = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return self.title

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(unique=True, max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='images/products')
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    # category = models.ForeignKey(Category, on_delete=models.SET_DEFAULT, default='Miscellaneous')
    characteristic = models.ManyToManyField(Characteristic, blank=True)

    @property
    def web_identifier(self):
        return f"WEB{self.id:04d}"

    def __str__(self):
        return self.title

__all__ = ["Category", "Characteristic", "Product"]
