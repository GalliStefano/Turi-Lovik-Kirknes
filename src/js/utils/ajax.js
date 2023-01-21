export function get(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
		xhr.responseType = 'json';
    const done = 4
    const success = 200

    xhr.onreadystatechange = () => {
      if (xhr.readyState === done) {
        if (xhr.status === success) {
          resolve(xhr.response)
        } else {
          reject(xhr.response)
        }
      }
    }

    xhr.open('GET', url, true)
    xhr.send()
  })
}

export async function post(url, params) {
	try {
	
		let response = await fetch(url, {
			method: 'POST',			
			body: params,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',		
			}
		});

		let _data = await response.json();
		console.log('informazioni ottenute');
		console.log(_data);
		return _data;
	
	} catch(e) {
		console.log('error', e);
	
	}
}