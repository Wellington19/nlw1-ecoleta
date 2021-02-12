export function maskCep(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{5})(\d)/, '$1-$2');

  e.currentTarget.value = value;
  return e;
}

export function maskPhone(e: React.FormEvent<HTMLInputElement>) {  
  let value = e.currentTarget.value; 
  let qtdeCaracter = value.length;

  if (qtdeCaracter > 14) {
    e.currentTarget.value = value.substring(0,14);
    return e;
  } else {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1)$2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');    
    e.currentTarget.value = value;
    return e;
  }
}  

export function maskCurrency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

  e.currentTarget.value = value;
  return e;
}