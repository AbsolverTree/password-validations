
window.addEventListener("DOMContentLoaded", () => {
    let password = document.getElementById('password')
    let toggleBtn = document.getElementById('toggleBtn')
    
    //show hidden password
    toggleBtn.onclick = function() {
        if(password.type === 'password'){
            password.setAttribute('type', 'text')
            toggleBtn.classList.add('hide')
            return;
        }
        
        if(password.type === 'text'){
            password.setAttribute('type', 'password')
            toggleBtn.classList.remove('hide')
        }
    }
})
