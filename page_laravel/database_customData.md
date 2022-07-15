## 新增Factories
```
 php artisan make:factory UserFactory --model=User
```

## Factories內容
```php
    namespace Database\Factories;

    use App\Models\User;
    use Illuminate\Support\Str;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Database\Eloquent\Factories\Factory;

    class UserFactory extends Factory
    {
        /**
         * The name of the factory's corresponding model.
         *
         * @var string
         */
        protected $model = User::class;

        /**
         * Define the model's default state.
         *
         * @return array
         */
        public function definition()
        {
            return [
                'name' => $this->faker->name,
                'title' => $this->faker->title,
                'address' => $this->faker->address,
                'paragraph' => $this->faker->paragraph, //文章
                'email' => $this->faker->unique()->safeEmail,
                'sentence' => $this->faker->sentence, //文章
                'email_verified_at' => now(), //時間
                'password' => Hash::make('password'),
                'remember_token' => Str::random(10), //亂數7Lp8mq7arp
            ];
        }
    }
```

## tinker執行假資料
```php
    php artisan tinker
    User::factory()->count(5)->create()
```


## 新增seeder執行假資料
```php
    php artisan make:seed UserTableSeeder
```

## seeder內容
```php
    namespace Database\Seeders;
    use Illuminate\Database\Seeder;
    use App\Models\User;

    class UserTableSeeder extends Seeder
    {
        /**
         * Run the database seeds.
         *
         * @return void
         */
        public function run()
        {
            User::factory()->count(50)->create();
        }
    }
```

## 執行seeder
```php
   php artisan db:seed --class=UserTableSeeder
```    



----
[Factory](https://dev.to/shanisingh03/generate-dummy-laravel-data-with-model-factories-seeder-gg4)<br>
[Factory](https://www.nicesnippets.com/blog/laravel-8-factory-example-tutorial)<br>
[Factory](https://ithelp.ithome.com.tw/articles/10226379)<br>
[Seeding 埋下資料種子](https://ithelp.ithome.com.tw/articles/10227061)<br>



