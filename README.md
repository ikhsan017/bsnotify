##bsnotify

A simple notification halper for Twitter Bootstrap 3, using default bootstrap modal plugin

###Usage

You need to load bootstrap.css and bootstrap.js first before loading jquery.bsnotify

```html
 <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
 <script type="text/javascript" src="jquery-1.10.1.min.js"></script>
 <script type="text/javascript" src="bootstrap.min.js"></script>
 <script type="text/javascript" src="jquery.bsnotify.js"></script>        
```

to display simple notification, simply call $().notify

```javascript
 $().notify('alert',{
    title : 'Notification Title',
    'message' : 'Some notification message'
 })
```
