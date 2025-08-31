# Find users older than 30, but only show their username and country. 

Query : 

```
db.users.find({age : {$gt : 30}}, {username : 1 , country : 1 , _id : 0})
```

output : 

```
[
  { username: 'jane_doe', country: 'Canada' },
  { username: 'chris_b', country: 'Australia' },
  { username: 'maria_s', country: 'Germany' }
]
```

# Find users whose follower count is less than or equal to 100.

Query : 

```
db.users.find({followers : {$lte : 100}})
```

Output : 

```
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6914'),
    username: 'chris_b',
    email: 'chris.b@inbox.com',
    age: 45,
    country: 'Australia',
    last_login: ISODate('2023-10-30T05:00:00.000Z'),
    followers: 50,
    interests: [ 'gardening', 'cooking' ],
    profile: { theme: 'light', bio: 'Loves the outdoors.' }
  },
  {
    _id: ObjectId('68b3c54b7776853ed5fe6916'),
    username: 'another_user',
    email: 'another@example.com',
    age: 29,
    country: 'USA',
    followers: 95,
    interests: [ 'music', 'programming' ],
    profile: 'Profile setup pending'
  }
]
```

# Find all users from 'USA' or 'Canada'.

Query 

```
<!-- using or -->
db.users.find({$or : [ {country : "USA"} , {country : "Canada"} ]})

<!-- using in -->
db.users.find({country : {$in : ["USA" , "Canada"]}})
```

Output : 

```
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6911'),
    username: 'alex_p',
    email: 'alex.p@example.com',
    age: 28,
    country: 'USA',
    last_login: ISODate('2023-10-25T10:00:00.000Z'),
    followers: 1200,
    interests: [ 'programming', 'hiking', 'music' ],
    profile: { theme: 'dark', bio: 'Software developer and nature enthusiast.' },
    devices: [
      {
        type: 'mobile',
        os: 'Android',
        last_seen: ISODate('2023-10-25T09:55:00.000Z')
      },
      {
        type: 'desktop',
        os: 'Windows',
        last_seen: ISODate('2023-10-24T15:30:00.000Z')
      }
    ]
  },
  {
    _id: ObjectId('68b3c54b7776853ed5fe6912'),
    username: 'jane_doe',
    email: 'jane.d@workplace.com',
    age: 34,
    country: 'Canada',
    last_login: ISODate('2023-11-01T12:30:00.000Z'),
    followers: 850,
    interests: [ 'travel', 'photography', 'music' ],
    profile: { theme: 'light' },
    subscription: {
      tier: 'premium',
      start_date: ISODate('2023-01-01T00:00:00.000Z')
    }
  },
  {
    _id: ObjectId('68b3c54b7776853ed5fe6916'),
    username: 'another_user',
    email: 'another@example.com',
    age: 29,
    country: 'USA',
    followers: 95,
    interests: [ 'music', 'programming' ],
    profile: 'Profile setup pending'
  }
]

```

# Find all users who are NOT from 'USA' or the 'UK'.

Query : 

```
db.users.find({country : {$not : {$in : ["USA" , "UK"]}}})
```


output : 
```
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6912'),
    username: 'jane_doe',
    email: 'jane.d@workplace.com',
    age: 34,
    country: 'Canada',
    last_login: ISODate('2023-11-01T12:30:00.000Z'),
    followers: 850,
    interests: [ 'travel', 'photography', 'music' ],
    profile: { theme: 'light' },
    subscription: {
      tier: 'premium',
      start_date: ISODate('2023-01-01T00:00:00.000Z')
    }
  },
  {
    _id: ObjectId('68b3c54b7776853ed5fe6914'),
    username: 'chris_b',
    email: 'chris.b@inbox.com',
    age: 45,
    country: 'Australia',
    last_login: ISODate('2023-10-30T05:00:00.000Z'),
    followers: 50,
    interests: [ 'gardening', 'cooking' ],
    profile: { theme: 'light', bio: 'Loves the outdoors.' }
  },
  {
    _id: ObjectId('68b3c54b7776853ed5fe6915'),
    username: 'maria_s',
    email: 'maria.s@example.com',
    age: 31,
    country: 'Germany',
    last_login: ISODate('2023-11-02T20:00:00.000Z'),
    followers: 1800,
    interests: [ 'art', 'history', 'travel' ],
    profile: { theme: 'dark', bio: 'Museum curator.' },
    subscription: {
      tier: 'premium',
      start_date: ISODate('2022-06-15T00:00:00.000Z')
    }
  }
]
```

# Find users who are from the 'USA' AND have more than 1000 followers.

Query : 

```
db.users.find({$and : [{country : "USA"} , {followers : {$gt : 1000}}]})
```

Output : 

```
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6911'),
    username: 'alex_p',
    email: 'alex.p@example.com',
    age: 28,
    country: 'USA',
    last_login: ISODate('2023-10-25T10:00:00.000Z'),
    followers: 1200,
    interests: [ 'programming', 'hiking', 'music' ],
    profile: { theme: 'dark', bio: 'Software developer and nature enthusiast.' },
    devices: [
      {
        type: 'mobile',
        os: 'Android',
        last_seen: ISODate('2023-10-25T09:55:00.000Z')
      },
      {
        type: 'desktop',
        os: 'Windows',
        last_seen: ISODate('2023-10-24T15:30:00.000Z')
      }
    ]
  }
]

```

# Find users who have more than 2000 followers OR are from 'Australia'.

Query : 

```
db.users.find({$or : [{followers : {$gt : 2000}},{country : "Australia"}]})
```

Output : 

```
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6913'),
    username: 'sam_g',
    email: 'sam.g@example.com',
    age: 22,
    country: 'UK',
    last_login: ISODate('2023-09-15T18:45:00.000Z'),
    followers: 2500,
    interests: [ 'gaming', 'streaming' ],
    profile: { theme: 'dark', bio: 'Pro gamer and streamer.' },
    devices: [
      {
        type: 'desktop',
        os: 'Windows',
        last_seen: ISODate('2023-09-15T18:40:00.000Z')
      }
    ]
  },
  {
    _id: ObjectId('68b3c54b7776853ed5fe6914'),
    username: 'chris_b',
    email: 'chris.b@inbox.com',
    age: 45,
    country: 'Australia',
    last_login: ISODate('2023-10-30T05:00:00.000Z'),
    followers: 50,
    interests: [ 'gardening', 'cooking' ],
    profile: { theme: 'light', bio: 'Loves the outdoors.' }
  }
]
```

# Find all users who have a subscription field.

Query 

```
db.users.find({subscription : {$exists : true}})
```

Output : 

```
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6912'),
    username: 'jane_doe',
    email: 'jane.d@workplace.com',
    age: 34,
    country: 'Canada',
    last_login: ISODate('2023-11-01T12:30:00.000Z'),
    followers: 850,
    interests: [ 'travel', 'photography', 'music' ],
    profile: { theme: 'light' },
    subscription: {
      tier: 'premium',
      start_date: ISODate('2023-01-01T00:00:00.000Z')
    }
  },
  {
    _id: ObjectId('68b3c54b7776853ed5fe6915'),
    username: 'maria_s',
    email: 'maria.s@example.com',
    age: 31,
    country: 'Germany',
    last_login: ISODate('2023-11-02T20:00:00.000Z'),
    followers: 1800,
    interests: [ 'art', 'history', 'travel' ],
    profile: { theme: 'dark', bio: 'Museum curator.' },
    subscription: {
      tier: 'premium',
      start_date: ISODate('2022-06-15T00:00:00.000Z')
    }
  }
]
```

# Find users whose profile field is a string, not an embedded document.

Query : 

```
db.users.find({profile : {$type : "string"}})
```

Output : 

```
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6916'),
    username: 'another_user',
    email: 'another@example.com',
    age: 29,
    country: 'USA',
    followers: 95,
    interests: [ 'music', 'programming' ],
    profile: 'Profile setup pending'
  }
]
```

# Find users who are interested in both 'travel' AND 'music'.

Query : 

```
db.users.find({$and : [{interests : "travel"} , {interests : "music"}]})
```

Output 

```
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6912'),
    username: 'jane_doe',
    email: 'jane.d@workplace.com',
    age: 34,
    country: 'Canada',
    last_login: ISODate('2023-11-01T12:30:00.000Z'),
    followers: 850,
    interests: [ 'travel', 'photography', 'music' ],
    profile: { theme: 'light' },
    subscription: {
      tier: 'premium',
      start_date: ISODate('2023-01-01T00:00:00.000Z')
    }
  }
]
```

# Find users who have used a 'mobile' device since October 1st, 2023.

Query : 

```
db.users.find({devices : {$elemMatch : {type : "mobile" , last_seen : {$gte : ISODate("2023-10-01")}}}})
```

Output : 

```
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6911'),
    username: 'alex_p',
    email: 'alex.p@example.com',
    age: 28,
    country: 'USA',
    last_login: ISODate('2023-10-25T10:00:00.000Z'),
    followers: 1200,
    interests: [ 'programming', 'hiking', 'music' ],
    profile: { theme: 'dark', bio: 'Software developer and nature enthusiast.' },
    devices: [
      {
        type: 'mobile',
        os: 'Android',
        last_seen: ISODate('2023-10-25T09:55:00.000Z')
      },
      {
        type: 'desktop',
        os: 'Windows',
        last_seen: ISODate('2023-10-24T15:30:00.000Z')
      }
    ]
  }
]
```

# Find all users whose email address ends with 'workplace.com'.

Query : 

```
db.users.find({email : {$regex : "workplace.com"}})
```

Output : 

```
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6912'),
    username: 'jane_doe',
    email: 'jane.d@workplace.com',
    age: 34,
    country: 'Canada',
    last_login: ISODate('2023-11-01T12:30:00.000Z'),
    followers: 850,
    interests: [ 'travel', 'photography', 'music' ],
    profile: { theme: 'light' },
    subscription: {
      tier: 'premium',
      start_date: ISODate('2023-01-01T00:00:00.000Z')
    }
  }
]
```

# For user sam_g, add 50 followers and add a new interest 'coding'.

Query : 

```
db.users.updateOne({username : "sam_g"},  {$inc : {followers : 50} , $push : {interests : "coding"}})
```

Output 

```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

<!-- After update  -->
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6913'),
    username: 'sam_g',
    email: 'sam.g@example.com',
    age: 22,
    country: 'UK',
    last_login: ISODate('2023-09-15T18:45:00.000Z'),
    followers: 2550,
    interests: [ 'gaming', 'streaming', 'coding' ],
    profile: { theme: 'dark', bio: 'Pro gamer and streamer.' },
    devices: [
      {
        type: 'desktop',
        os: 'Windows',
        last_seen: ISODate('2023-09-15T18:40:00.000Z')
      }
    ]
  }
]

```

# For all users from the 'USA', rename the followers field to follower_count.

Query 

```
db.users.updateMany({country : "USA"} , {$rename : {"followers" : "follower_count"}})
```

Output 

```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}

<!-- After Update -->
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6911'),
    username: 'alex_p',
    email: 'alex.p@example.com',
    age: 28,
    country: 'USA',
    last_login: ISODate('2023-10-25T10:00:00.000Z'),
    interests: [ 'programming', 'hiking', 'music' ],
    profile: { theme: 'dark', bio: 'Software developer and nature enthusiast.' },
    devices: [
      {
        type: 'mobile',
        os: 'Android',
        last_seen: ISODate('2023-10-25T09:55:00.000Z')
      },
      {
        type: 'desktop',
        os: 'Windows',
        last_seen: ISODate('2023-10-24T15:30:00.000Z')
      }
    ],
    follower_count: 1200
  },
  {
    _id: ObjectId('68b3c54b7776853ed5fe6916'),
    username: 'another_user',
    email: 'another@example.com',
    age: 29,
    country: 'USA',
    interests: [ 'music', 'programming' ],
    profile: 'Profile setup pending',
    follower_count: 95
  }
]
```

# Attempt to update user new_user; if they don't exist, insert them with default data.

Query : 

```
db.users.updateOne(
  {username : "new_user"},
  {
    $set : {
      username : "new_user",
      email : "newuser@gmail.com",
      age : 20,
      country : "Nepal",
      last_login : Date(),
      interests : [],
      profile : {},
      deveices : [],
      followers : 0
    }
  },
  {upsert : true}
)
```

Output 

```
{
  acknowledged: true,
  insertedId: ObjectId('68b3dde72392c8fdf949cd07'),
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 1
}

<!-- After update -->

[
  {
    _id: ObjectId('68b3dde72392c8fdf949cd07'),
    username: 'new_user',
    age: 20,
    country: 'Nepal',
    deveices: [],
    email: 'newuser@gmail.com',
    followers: 0,
    interests: [],
    last_login: 'Sun Aug 31 2025 05:30:15 GMT+0000 (Coordinated Universal Time)',
    profile: {}
  }
]
```

# Delete all users who have not logged in (hint: the last_login field does not exist).

Query :

```
db.users.deleteMany({last_login : {$exists : false}})
```

Output 

```
{ acknowledged: true, deletedCount: 1 }
```

# Find users from the 'USA' who are either younger than 25 OR have more than 1500 followers.

Query : 

```
db.users.find({$and : [{country : "USA"}, {$or : [{age : {$lt : 25}}, {followers : {$gt : 1500}}]}]})
```

Output : 

```
[]
```

# Find all users who have a 'desktop' device that runs 'Windows'.

Query 

```
db.users.find({devices : {$elemMatch : {type : "desktop" , os : "Windows"}}})
```

Output 

```
[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6911'),
    username: 'alex_p',
    email: 'alex.p@example.com',
    age: 28,
    country: 'USA',
    last_login: ISODate('2023-10-25T10:00:00.000Z'),
    interests: [ 'programming', 'hiking', 'music' ],
    profile: { theme: 'dark', bio: 'Software developer and nature enthusiast.' },
    devices: [
      {
        type: 'mobile',
        os: 'Android',
        last_seen: ISODate('2023-10-25T09:55:00.000Z')
      },
      {
        type: 'desktop',
        os: 'Windows',
        last_seen: ISODate('2023-10-24T15:30:00.000Z')
      }
    ],
    follower_count: 1200
  },
  {
    _id: ObjectId('68b3c54b7776853ed5fe6913'),
    username: 'sam_g',
    email: 'sam.g@example.com',
    age: 22,
    country: 'UK',
    last_login: ISODate('2023-09-15T18:45:00.000Z'),
    followers: 2550,
    interests: [ 'gaming', 'streaming', 'coding' ],
    profile: { theme: 'dark', bio: 'Pro gamer and streamer.' },
    devices: [
      {
        type: 'desktop',
        os: 'Windows',
        last_seen: ISODate('2023-09-15T18:40:00.000Z')
      }
    ]
  }
]

```

# Update all users with a 'dark' theme profile by adding a pro_user: true flag.

Query 

```
db.users.updateMany({"profile.theme" : "dark"}, {$set : {pro_user : true}})
```

Output 

```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}

<!-- After Update -->

[
  {
    _id: ObjectId('68b3c54b7776853ed5fe6911'),
    username: 'alex_p',
    email: 'alex.p@example.com',
    age: 28,
    country: 'USA',
    last_login: ISODate('2023-10-25T10:00:00.000Z'),
    interests: [ 'programming', 'hiking', 'music' ],
    profile: { theme: 'dark', bio: 'Software developer and nature enthusiast.' },
    devices: [
      {
        type: 'mobile',
        os: 'Android',
        last_seen: ISODate('2023-10-25T09:55:00.000Z')
      },
      {
        type: 'desktop',
        os: 'Windows',
        last_seen: ISODate('2023-10-24T15:30:00.000Z')
      }
    ],
    follower_count: 1200,
    pro_user: true
  },
  {
    _id: ObjectId('68b3c54b7776853ed5fe6913'),
    username: 'sam_g',
    email: 'sam.g@example.com',
    age: 22,
    country: 'UK',
    last_login: ISODate('2023-09-15T18:45:00.000Z'),
    followers: 2550,
    interests: [ 'gaming', 'streaming', 'coding' ],
    profile: { theme: 'dark', bio: 'Pro gamer and streamer.' },
    devices: [
      {
        type: 'desktop',
        os: 'Windows',
        last_seen: ISODate('2023-09-15T18:40:00.000Z')
      }
    ],
    pro_user: true
  },
  {
    _id: ObjectId('68b3c54b7776853ed5fe6915'),
    username: 'maria_s',
    email: 'maria.s@example.com',
    age: 31,
    country: 'Germany',
    last_login: ISODate('2023-11-02T20:00:00.000Z'),
    followers: 1800,
    interests: [ 'art', 'history', 'travel' ],
    profile: { theme: 'dark', bio: 'Museum curator.' },
    subscription: {
      tier: 'premium',
      start_date: ISODate('2022-06-15T00:00:00.000Z')
    },
    pro_user: true
  }
]
```
