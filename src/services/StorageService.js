class StorageService {
	constructor() {
		this.storage = localStorage;
	}

	getItem(item) {
		try {
			return this.storage.getItem(item) || null;
		} catch (error) {
			console.log('Error getting item from LocalStorage:', error);
			return null;
		}
	}

	setItem(item, value) {
		try {
			this.storage.setItem(item, value);
		} catch (error) {
			console.log('Error setting item in LocalStorage:', error);
		}
	}
}

let storageService = new StorageService();
export { storageService };