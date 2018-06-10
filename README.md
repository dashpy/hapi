# Description
Node server using hapi library and moongose.

# Dependencies
- mongoose:27017
- hapi:3000


```sh
npm install
npm start
```

# Model

```sh
const dogModel = new Schema({
  name: { type: String, required: true, index: { unique: true } },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  image: { type: String, required: true }
});
```
