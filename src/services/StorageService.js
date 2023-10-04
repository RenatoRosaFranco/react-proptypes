class StorageService {
  constructor () {
    this.storage = localStorage;
  }

	setItem (item, value) {
    try {
      this.storage.setItem(item, value);
    } catch (error) {
      console.log('Error setting item in LocalStorage:', error);
    }
  }

  getItem (item) {
    try {
      return this.storage.getItem(item) || null
    } catch (error) {
      console.log('Error getting item from LocalStorage:', error);
      return null;
    }
  }

	removeItem(item) {
		try {
			return this.storage.removeItem(item);
		} catch (error) {
			console.log('Error removing item from LocalStorage:', error);
			return null;
		}
	}
}

const storageService = new StorageService()
export { storageService }
