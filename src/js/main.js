const cipher = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code);

    return text => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
}

function hash_text(text){
    const myPassword = cipher('morganamx')
     return myPassword(text)
}

const put_params_bulding = (data) => {
    let { username ,id, price, location, email, name, phone } = data;
    let div_ifrm = document.getElementById(id);
    let params = `${username?`username=${username}`:''}${price?`&price=${price}`:''}${location?`&location=${location}`:''}${email?`&email=${email}`:''}${name?`&name=${name}`:''}${phone?`&phone=${phone}`:''}`;
    params = hash_text(params);
 

    if (/Mobile/i.test(navigator.userAgent)) {
      div_ifrm.innerHTML += `
        <iframe 
              src="https://scotty.morgana.mx/quote/first_step/${params.length>0 ? `?${params}`:''}"
              style="width:100%; height:700px;"
          >
          </iframe>
  
        `
    } else {
    
      // El código se está ejecutando en un dispositivo de escritorio

    div_ifrm.innerHTML += `
     <iframe 
            src="https://scotty.morgana.mx/quote/first_step/${params.length>0 ? `?${params}`:''}"
            style="width:100%; height:500px;"
        >
        </iframe>

      `
    
    }
}

window.onload = function() {
    const data = {
        username:'',
        id:'id_space_sb',
        price:'750000',
        location:'MEX', 
        email:'',
        name:'',
        phone:''
    }
   put_params_bulding(data)
  };