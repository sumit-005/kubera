const storagePrefix = "hb_";

const storage = {
  getItem: (key: string) => {
    try {
      const value = localStorage.getItem(`${storagePrefix}${key}`);
      return value !== null && value !== undefined ? JSON.parse(value) : "";
    } catch (e) {
      // console.log('error', e);
    }
  },
  setItem: (key: string, value: any) => {
    try {
      if (value !== null || value !== undefined) {
        localStorage.setItem(`${storagePrefix}${key}`, JSON.stringify(value));
      }
    } catch (e) {
      // console.log('error', e);
    }
  },
  removeItem: (key: string) => {
    try {
      localStorage.removeItem(`${storagePrefix}${key}`);
    } catch (e) {
      // console.log('error', e);
    }
  },
};

export default storage;
