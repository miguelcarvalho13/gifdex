import {a} from './index1.js';
import {b} from './index2.js';
import Vue from 'vue';
import $ from 'jquery';
//import {Clipboard} from 'clipboard';

var searchInitialList = ["Jojos Bizarre Adventure Funny", "Cats funny", "gaming", "gifs"];

Vue.component('gif-card', 
{
  props: ['gifData'],
  template: "<div class=\"gif-card mdl-card mdl-shadow--4dp\">"+
              "<div class=\"mdl-card__actions gif-card-bottom\">" +
                "<span class=\"\">{{ getSize }}</span>" +
                "<div class=\"mdl-layout-spacer\"></div>" +
                "<button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" v-bind:data-clipboard-text=\"gifData.images.original.url\" >" +
                  "<i class=\"material-icons\">content_copy</i>" +
                "</button>" +
              "</div>" +
            "</div>",
  mounted: function()
  {
    this.$el.style.backgroundImage = "url("+this.gifData.images.downsized.url+")";
  },
  computed:
  {
    getSize: function()
    {
      var bytes = Number(this.gifData.images.original.size);
      var size = "";
      if(bytes < 1024 * 1024) size = (bytes/1024).toFixed(2) + "kb";
      else size = (bytes/(1024*1024)).toFixed(2) + "mb";
      
      return size;
    }
  }
});

// our Vue instance
var vm = new Vue(
{
  el: "#root",
  data: 
  {
    gifs: [],
    message: "apenas um teste",
    gifSearchTerm: ""
  }
});

$(document).ready(function()
{
  vm.gifSearchTerm = searchInitialList[parseInt(Math.random()*searchInitialList.length)];
  
  requestGifs(vm.gifSearchTerm);
  
  function requestGifs(searchTerm)
  {
    var currentSeach = encodeURIComponent(searchTerm.toLowerCase());
    
    // clears the array
    vm.gifs = [];
    
    $.ajax(
    {
      url:"http://api.giphy.com/v1/gifs/search?q="+currentSeach+"&api_key=c3ecdb6e5b8a45908f1101982b4505f0&limit=10",
      header: 
      {
        "Accept" : "image/*"
      },
      method: "GET",
      success: onGetGifs
    });
  }

  function onGetGifs(response)
  {
    console.log("success got data", response); 
    
    // re-populates the array
    var giphyGifs = response.data;
    for(var i = 0; i < giphyGifs.length; i++) 
    {
      vm.gifs.push(giphyGifs[i]);
    }
  }
  
  $(document.getElementById("searchGifInput")).keypress(function(e)
  {
    if( (e.keyCode ? e.keyCode : e.which) == 13)
    {
      //$(this).trigger("click");
      requestGifs(vm.gifSearchTerm);
    }
  });
  
});

