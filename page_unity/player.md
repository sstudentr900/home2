## Player
```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    // double try float add f
    // public 顯示在unity
    // public float moveSpeed = 5f;

    // SerializeField 可在unity修改
    [SerializeField] float moveSpeed = 8f;
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        //show log
        // Debug.Log(123);

        //鍵盤輸入D鍵(KeyCode.D)
        //鍵盤輸入A鍵(KeyCode.A)
        //鍵盤輸入右鍵(KeyCode.RightArrow)
        //鍵盤輸入右鍵(KeyCode.LeftArrow)
        if(Input.GetKey(KeyCode.RightArrow))
        {
            
            //Time.deltaTime 解決每台電腦運作時間不同
            transform.Translate(moveSpeed*Time.deltaTime, 0, 0);
        }
        else if(Input.GetKey(KeyCode.LeftArrow))
        {
            transform.Translate(-moveSpeed*Time.deltaTime, 0, 0);
        }
    }

    //碰撞
    //private 是預設可刪除
    void OnCollisionEnter2D(Collision2D other) {
        if(other.gameObject.tag=="Normal")
        {
            Debug.Log("Normal");
        }
        else if(other.gameObject.tag=="Nails")
        {
            Debug.Log("Nails");
        }
    }

    //觸發 end
    void OnTriggerEnter2D(Collider2D other) {
        if(other.gameObject.tag=="DeathLine")
        {
            Debug.Log("end");
        }
    }
}

```

## Floor
```C#
  [SerializeField] GameObject [] floorPrefabs;
    public void SpawnFloor() 
    {
        int r = Random.Range(0,floorPrefabs.Length);
        //創建階梯塞到子物件後面
        Instantiate(floorPrefabs[r],transform);
        
    }

```

## FloorManager
```C#
 void Update()
    {
        transform.Translate(0,moveSpeed*Time.deltaTime,0);
    }
```


---
[Unity 遊戲開發初學者教學](https://www.youtube.com/watch?v=nPW6tKeapsM)<br>
