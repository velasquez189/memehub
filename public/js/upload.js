var albumBucketName = 'memepieimages';
var bucketRegion = 'us-east-2';
var IdentityPoolId = 'us-east-2:25744f84-733f-46bb-bc15-7c143d3c89e6';



AWS.config.update({
  region: 'us-east-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: albumBucketName }
});

console.log("its working");

function test() {
  console.log("this works too");
}

// function to view the photos stored in S3 bucket
function viewAlbum(albumName) {
  var albumPhotosKey = encodeURIComponent(albumName) + '/';
  s3.listObjects({ Prefix: albumPhotosKey }, function (err, data) {
    if (err) {
      return alert('There was an error viewing your album: ' + err.message);
    }
    // `this` references the AWS.Response instance that represents the response
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + albumBucketName + '/';
    var htmlTemplate = [
      '<input id="photoupload" type="file" accept="image/*">',
      '<form>',
      '<br>',
      '<div class="form-group row">',
      '<label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Add Tags:</label>',
        '<div class="col-xs-4">',
          '<input type="string" class="form-control form-control-sm" id="colFormLabelSm" placeholder="seperate with commas">',
        '</div>',
      '</div>',
      '</form>',
      '<button id="addphoto" onclick="addPhoto(\'' + albumName + '\')">',
      'Add Photo',
      '</button>'
    ]
    document.getElementById('app').innerHTML = getHtml(htmlTemplate);
    console.log('you made it here ass-wipe');
  });
}

//function for users to add photos to the S3 bucket

function addPhoto(memes) {
  var files = document.getElementById('photoupload').files;
  if (!files.length) {
    return alert('Please choose a file to upload first.');
  }
  var file = files[0];
  var fileName = file.name;
  var albumPhotosKey = encodeURIComponent(memes) + '//';

  var photoKey = albumPhotosKey + fileName;
  s3.upload({
    Key: photoKey,
    Body: file,
    ACL: 'public-read'
  }, function (err, data) {
    if (err) {
      return alert('There was an error uploading your photo: ', err.message);
    }
    // alert('Successfully uploaded photo.');
    console.log(file);
    viewAlbum('memes');
  });
}