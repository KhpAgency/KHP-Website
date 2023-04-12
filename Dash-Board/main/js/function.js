function collectFormData() {
    const form = document.querySelector('form');
    const formData = new FormData(form);
    const clientName = formData.get('clientName');
    const logo = formData.get('logo');
    const cover = formData.get('cover');
  
    console.log('Client Name:', clientName);
    console.log('Logo:', logo);
    console.log('Cover:', cover);
  
  }
  