// Simple version here

// export default {
//   bind: function(el, binding, vnode) {
    
//     const display = binding.value ? 'block': 'none';
//     el.style.display = display;
//   }
// } 

export default {
  bind: function(el, binding, vnode) {
    const display = binding.value.display ? 'block': 'none';
    const delay = binding.value.delay;
    
    setTimeout(() => el.style.display = display, delay);
  }
} 