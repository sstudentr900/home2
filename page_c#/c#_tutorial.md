 ## C
 ``` C#
    //一段字串("")     string "一段字串"
    //一個字元('')     char 'A';
    //整數             init 160
    //浮點數           double 160.5
    //布林             bool true false

    string name = "wiht";
    char sex = 'M';
    int age = 30;
    double height = 180.5;
    bool is_male = true;

    //Console.WriteLine 自動換行
    //Console.Write     不換行
    // \n 換行, \" 特殊字元
    Console.WriteLine("Hello\" World!");
    Console.WriteLine("我叫"+name+"\n有" + name.Length+"個字");
    Console.WriteLine("第一的字"+name[0]+ ",W位置在:" + name.IndexOf('w')+",切割w:"+name.Substring(1));
    Console.WriteLine("大寫:" + name.ToUpper()+",小寫:"+ name.ToLower());
    Console.WriteLine("內有含QQ:"+ name.Contains("qq"));
    Console.WriteLine(name+"今年"+ age+"歲");
    Console.WriteLine(name+"身高" + height+"公分");
```    

## 數字
 ``` C#
    Console.WriteLine("整數除顯示整數"+age/4 + ",浮點數除顯示浮點數" + age/4.0);
    Console.WriteLine("-10絕對值"+ System.Math.Abs(-10));
    Console.WriteLine("2的3次方"+ System.Math.Pow(2,3));
    Console.WriteLine("8開根號"+ System.Math.Sqrt(64));
    Console.WriteLine("顯示最大數" + System.Math.Max(2,3));
    Console.WriteLine("四什五入" + System.Math.Round(2.6));
```    

## 取得用戶輸入
 ``` C#
    Console.WriteLine("請輸入名子:");
    Console.ReadLine();
    Console.Write("請在輸入名子(不換行):");
    Console.ReadLine();
    Console.WriteLine("請輸入你的年紀:");
    string age2 = Console.ReadLine();
    Console.WriteLine("你好啊,你的年紀:"+ age2 + "歲");
```    

## 計算機
 ``` C#
    Console.WriteLine("請輸入數字1:");
    // int numl = Convert.ToInt32(Console.ReadLine());     //字串轉整數(只能輸入整數)
    double numl = Convert.ToDouble(Console.ReadLine());    //可以輸入整數,浮點數
    Console.WriteLine("請輸入數字2:");
    // int num2 = Convert.ToInt32(Console.ReadLine());     //字串轉整數(只能輸入整數)
    double num2 = Convert.ToDouble(Console.ReadLine());    //可以輸入整數,浮點數
    Console.WriteLine(numl+ num2);
```

## array
 ``` C#
    //array
    int[] scores = { 50, 65, 70, 80, 90 };
    Console.WriteLine(scores[0]);
    scores[0] = 88;
    Console.WriteLine("50修改後"+ scores[1]);

    //空array 存放10個字
    string[] phone = new string[10];
    phone[0] = "444";
    phone[1] = "555";

    //2維陣列
    int[,] nums = {
        { 1,5,6 },
        { 8,2,5 },
        { 3,8,4 },
    };
    Console.WriteLine(nums[0, 0]);

    //空2維陣列
    int[,] num = new int[3,4];
    num[0, 0] = 3;
    num[0, 1] = 4;
    Console.WriteLine(num[0, 0]);
```    

##  if判斷
```c#
    bool hungry = true;
    int score = 100;
    if (hungry && score == 100)
    {
        Console.WriteLine("我很餓且去吃" + score + "飯");
    }
    else if (hungry || score ==80)
    {
        Console.WriteLine("我很餓");
    }
    else
    {
        Console.WriteLine("我不要吃飯");
    }
```    


##  進階計算機
```c#
    Console.Write("第1個數:");
    double numl = Convert.ToDouble(Console.ReadLine());
    Console.Write("運算符:");
    string oper = Console.ReadLine();
    Console.Write("第2個數:");
    double numl2 = Convert.ToDouble(Console.ReadLine());
    if (oper == "+")
    {
        Console.WriteLine(numl + numl2);
    }
    else if (oper == "-")
    {
        Console.WriteLine(numl - numl2);
    }
    else if (oper == "*")
    {
        Console.WriteLine(numl * numl2);
    }
    else if (oper == "/")
    {
        Console.WriteLine(numl / numl2);
    }
    else 
    {
        Console.WriteLine("錯誤運算符");
    }
```  


## while 迴圈
```C#
    int num = 1;
    while (num <= 2) {
        Console.WriteLine(num);
        num = num + 1; //同 num++;
    }
    Console.WriteLine("-----");
    do
    {
        Console.WriteLine(num);
        num++;
    } while (num <= 5);
```

## 猜數字
```C#
    int secret_num = 66;
    int guess;
    int guess_count = 0;
    int guess_limit = 3;
    bool win = false;

    do {
        Console.Write("猜數字:");
        guess = Convert.ToInt32(Console.ReadLine());
        guess_count++;
        if (guess > secret_num)
        {
            Console.WriteLine("小一點");
        }
        else if (guess < secret_num)
        {
            Console.WriteLine("大一點");
        }
        else 
        {
            Console.WriteLine("答對了");
            win = true;
        }
    } while (guess!= secret_num && guess_count< guess_limit);

    if (!win)
    {
        Console.WriteLine("你輸了~");
    }
```

## for 迴圈
```C#
    for (int i = 1; i <= 5; i++) 
    {
        Console.WriteLine(i);
    }

    int[] nums = { 26, 5, 55, 488, 245 };
    for (int i = 0; i <= nums.Length; i++)
    {
        Console.WriteLine(nums[i]);
    }
```

        

## 新增class
![Imgur](https://i.imgur.com/W7sXYgu.jpg)<br>
![Imgur](https://i.imgur.com/eB30uoW.jpg)<br>

### 使用class
class1.cs
```C#
    //自訂空間
   namespace Animal
    {
        class Class1
        {
            public double height;
            public int age;
            public string name;

            //method
            public void SayHi()
            {
                Console.WriteLine("你好我叫" + name);
            }

            //void 不回傳值
            public void IsAult()
            {
                if (age > 18)
                {
                    Console.WriteLine("大於18歲");
                }
                else 
                {
                    Console.WriteLine("小於18歲");
                }
            }

            //回傳bool
            public bool IsHeight()
            {
                if (age > 100)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

            //回傳int
            public int add(int num1, int num2)
            {
                return num1 + num2;
            }
        }
    }
```
Program.cs
```C#
    using System;
    //using 引用其他空間
    using Animal;

    //namespace 空間
    namespace ConsoleApp1
    {
        //class 模板
        class Program
        {
            //Main 程式開始點
            static void Main(string[] args)
            {
                //使用 Animal.class1 
                Class1 person1 = new Class1();
                person1.height = 180.5;
                person1.age = 42;
                person1.name = "小黑";
                Console.WriteLine(person1.height);

                //method
                person1.SayHi();
                person1.IsAult();
                if (person1.IsHeight())
                {
                    Console.WriteLine("身高大於100");
                }
                else 
                {
                    Console.WriteLine("身高小於100");
                }
                Console.WriteLine(person1.add(1, 2));
            }
        }
    }
```

### 建構方法
class1.cs
```C#
   namespace ConsoleApp1
    {
        class Class1
        {
            public double height;
            public int age;
            public string name;

            //建構方法(不能回傳資料,和class同名,立即執行)
            public Class1(double height, int age, string name)
            {
                this.height = height;
                this.age = age;
                this.name = name;
            }
        }
    }
```
Program.cs
```C#
    using System;
    namespace ConsoleApp1
    {
        class Program
        {
            static void Main(string[] args)
            {
                //使用 ConsoleApp1.class1 
                Class1 person1 = new Class1(180.5,42,"小黑");
                Console.WriteLine(person1.height);
            }
        }
    }
```

### get,set
class1.cs
```C#
   namespace ConsoleApp1
    {
        class Class1
        {
            //private 只有該CLASS 能使用
            private double height;
            public Class1(double h)
            {
                Height = h;
            }
            public double Height
            {
                //取得height值
                get { return height; }
                //設定height值
                set {
                    if (value < 100) {
                        height =  100;
                    }
                }
            }
        }
    }
```
Program.cs
```C#
    using System;
    namespace ConsoleApp1
    {
        class Program
        {
            static void Main(string[] args)
            {
                //使用 ConsoleApp1.class1 
                Class1 person1 = new Class1(180.5,42,"小黑");
                Console.WriteLine(person1.height);
            }
        }
    }
```

### static
class1.cs
```C#
   namespace ConsoleApp1
    {
        class Class1
        {
           //static 是存在class底下
            public static int count = 1;
            public int GetCount()
            {
                return count;
            }
        }
    }
```
Program.cs
```C#
    using System;
    namespace ConsoleApp1
    {
        class Program
        {
            static void Main(string[] args)
            {
               
                //class1 get count
                Console.WriteLine(Class1.count);

                //person1 method get count
                Class1 person1 = new Class1();
                Console.WriteLine(person1.GetCount());
            }
        }
    }
```

### static method,static class
class1.cs
```C#
   namespace ConsoleApp1
    {
        //static class 不能new會錯誤
        static class Class1
        {
           //static method
            public static void SayHi()
            {
                Console.WriteLine("hi");
            }
        }
    }
```
Program.cs
```C#
    using System;
    namespace ConsoleApp1
    {
        class Program
        {
            static void Main(string[] args)
            {
                //static method
                Class1.SayHi();

                //static class 不能new會錯誤 
                Class1 class1 = new Class1();
            }
        }
    }
```

### 繼承
class1.cs
```C#
   namespace ConsoleApp1
    {
        static class Class1
        {
            public double height;
            public int age;
            public string name;

            //method
            public void SayHi()
            {
                Console.WriteLine("你好我叫" + name);
            }
        }
    }
```
class2.cs
```C#
   namespace ConsoleApp1
    {
        //繼承
        static class Class2 : Class1
        {
           public Class2(double height, int age, string name)
            {
                this.height = height;
                this.age = age;
                this.name = name;
            }
        }
    }
```
Program.cs
```C#
    using System;
    namespace ConsoleApp1
    {
        class Program
        {
            static void Main(string[] args)
            {
                Class2 class2 = new Class2(165.5,30,"小白");
                Console.WriteLine(class2.name);
                class2.SayHi();
            }
        }
    }
```

----
[3小時初學者教學](https://www.youtube.com/watch?v=T9BeejD3i0g)<br>