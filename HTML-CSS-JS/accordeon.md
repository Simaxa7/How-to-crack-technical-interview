```
<style>

body {overflow:scroll;} 

.accordion.active:after {
  content: '\2212';
}

.active,
.accordion:hover {
  border-bottom: 1px solid #ccc;
}

.accordion {
	position:relative;
	border-bottom: 1px solid transparent;
	padding:8px;
}

.accordion:after {
  position: absolute;
  content: '\002B';
  float: right;
  margin: 2px 16px;
  top: 4px;
  right: 0; 
}

.panel {
	padding: 0px 28px;
  	max-height: 0;
  	overflow: hidden;
  	transition: max-height 0.2s ease-out;
  	margin: 0px;
}

.method-title {
  text-align: center;
  margin-bottom: 0px;
}
</style>
```


```
<script>
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}</script>
```

<div>
    <div class="accordion">
        Name first expander
    </div>
    <div class="panel">
        Information for first block
    </div>

    <div class="accordion">
        Name second expander
    </div>
    <div class="panel">
        Information for second block
    </div>
</div>