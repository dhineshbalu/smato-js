class Objects {
  static getKeys(obj) {
     return Object.keys(obj)
  }
  static getValues(obj) {
    return Object.values(obj)
  }
  static getPairs(obj) {
    let pairs = []
    Object.entries(obj).forEach((v)=> {
      pairs.push(v)
    })
    return pairs
  }
  static getInvert(obj) {
    let invert = {}
     for(var key in obj) {
      invert[obj[key]] = key;
    }
    return invert   
  }
  static getExtended(obj1,obj2) {
    return Object.assign(obj1,obj2)
  }
  static findKey(obj,key) {
    let o = {}
    o[key] = obj[key]
    if (obj.hasOwnProperty(key))
      return o 
     else 
      return  {}
  }
  static pick(obj,arg) {
    let o = {}
    for (let a of arg) {
      if (obj.hasOwnProperty(a)) 
        o[a] = obj[a]
    }
    return o
  }
  static omit(obj,arg) {
    for (let a of arg) {
      delete obj[a]
    }
    return obj
  }
  static has(obj,key) {
    if (obj.hasOwnProperty(key)) 
      return true
    else
      return false
  }
  static propertyOf(obj,arg) {
    let values = []
    if (typeof arg == 'string') {
      return obj[arg]
    } else {
      for (let a of arg) {
          if (obj.hasOwnProperty(a)) {
            values.push(obj[a])
          }
      }
      return values
    }
  }
  static clone(obj) {
    return Object.assign({},obj)
  }
  static isEqual(a,b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    return true;
  }
  static isEmpty(obj) {
    return typeof obj == 'object' &&  Object.keys(obj).length == 0 ? true : false
  }
  static isArray(arr) {
        return  Array.isArray(arr)
  }
  static isObject(obj) {
    return typeof obj == 'object'
  }
  static isFunction(fn) {
    return typeof fn == 'function'
  }
  static isString(str) {
    return typeof str == "string"
  }
  static isNumber(num) {
    return typeof num == "number"
  }
  static checkIsFinite(num) {
    return isFinite(num)
  }
  static isDate(date) {
    return date instanceof Date
  }
  static isMatch(obj1,obj2) {
     for(let [key,val] of Object.entries(obj2)) {
       if (!(obj1.hasOwnProperty(key) && obj1[key] == val))
           return false
     }
     return true
  }
  static checkIsMap(obj) {
    return obj instanceof Map
  }
  static checkIsWeakMap(obj) {
    return obj instanceof WeakMap
  }
  static checkIsSet(obj) {
    return obj instanceof Set
  }
  static checkIsWeakSet(obj) {
    return obj instanceof WeakSet
  }
  static checkIsNull(obj) {
    return obj == null
  }
  static checkIsUndefined(obj) {
    return typeof obj == "undefined"
  }
  static checkIsNaN(obj) {
    return isNaN(obj)
  }
  static setDefault(obj1,obj2) {
    for(let [key,value] of Object.entries(obj1)) {
      if (obj2.hasOwnProperty(key)) {
        obj2[key] = value
      }
    }
    return obj2
  }
  static checkIsBoolean(obj) {
    return typeof obj == "boolean"
  }
}
module.exports = Objects