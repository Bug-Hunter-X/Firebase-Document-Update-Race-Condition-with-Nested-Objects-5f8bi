The solution uses Firebase's `update()` method to directly update the nested field without needing to fetch the entire document first.

```javascript
// Correct code
db.collection('users').doc(userId).update({
  "profile.address.city": 'New York'
}).then(() => {
  console.log('Document successfully updated!');
}).catch(error => {
  console.error('Error updating document: ', error);
});
```