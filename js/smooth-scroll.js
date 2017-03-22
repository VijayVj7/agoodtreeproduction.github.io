$('#toggle-message').click(function({

  var $this= $(this);
  $this.toggleClass('HideMe');
  if($this.hasClass('HideMe')){
  	$this.text('showMe');
  }else{
  	$this.text('HideMe');
  }

});
