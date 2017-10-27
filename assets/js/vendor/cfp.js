(function(d, w){
var mailtoForm = new mailto(document.getElementById('mailto-form'), { preventDefault: false });
var fields = ['entry.1910784286', 'entry.174408459'];

function saveFields(fields, data){
  if ('localStorage' in w) {
    fields.forEach(function(f){
      localStorage[f] = data[f];
    });
  }
}

function restoreFields(fields){
  fields.forEach(function(f){
    if (localStorage[f]) {
      d.querySelector('[name="'+f+'"]').value = localStorage[f];
    }
  });
}

mailtoForm.formatter = function bracketFormatter(m){
  var data = m.getData();

  return mailBody.replace(/{{([^}]+)}}/g, function(m, key){
    return data[key] || '';
  });
};

mailtoForm.onSubmit = function(m){
  var data = m.getData();

  saveFields(fields, data);
};

restoreFields(fields);

w['Cfp'] = mailtoForm;
})(document, window);
