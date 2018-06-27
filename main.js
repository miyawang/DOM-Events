clickMe.addEventListener('click',function(e){
  popover.style.display = 'block';
  console.log('block');
  // debugger; //打断点
  e.stopPropagation();      //传播
  // 阻止默认事件
  
})
// 点击浮层也会消失 所以 在wrapper那也停止冒泡
wrapper.addEventListener('click',function(e){
  e.stopPropagation();
})
document.addEventListener('click',function(){
  console.log(1);
  popover.style.display = 'none';
  console.log('none');
  
})

// // 以上方案会浪费内存，下面用节省内存的方式
// $(clickMe).on('click',function(){
//   $(popover).show();
//   console.log('show');
//   setTimeout(function(){
//     $(document).one('click',function(){
//       console.log('执行么？');
      
//       console.log('document');    
//       $(popover).hide();
//     })
//   },0)

// })
// // $(wrapper).on('click',false);
// //等价于
// $(wrapper).on('click',function(e){
//   // e.preventDefault();
//   console.log('click事件走到了document');
  
//   // e.stopPropagation();
//   // 如果在checkbox的父元素或者他本身 添加了阻止默认事件 
//   // 那么 这个CheckBox将无法被选中 阻止默认事件一般不要在一个div上面做 阻止传播是可以的
// })

