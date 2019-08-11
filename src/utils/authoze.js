export const ADMIN = "admin";
export const LEADER = "leader";
export const DEVERLOPER = "developer";

export var authorization = function() {
    var is_active = localStorage.getItem('is_active');
    var is_superuser = localStorage.getItem('is_superuser');
    var is_staff = localStorage.getItem('is_staff');
    if((is_active == 'true') && (is_superuser == 'true') &&  is_staff == 'true'){
        return 'admin';
    }else if(is_active == 'true' && is_superuser == 'true' && is_staff == 'false'){
        return  'leader';
    }else if(is_active == 'true' && is_superuser == 'false' && is_staff == 'false' ){
        return 'developer';
    }
  }