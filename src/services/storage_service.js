class StorageService {
	constructor() {
		this.stoge = localStorage;
	}

	getItem(item) {
		try {
			return this.localStorage.getItem(item) || null;
		} catch (error) {
			console.log('Error getting item from LocalStorage:', error);
			return null;
		}
	}

	setItem(item, value) {
		try {
			this.localStorage.setItem(item, value);
		} catch (error) {
			console.log('Error setting item in LocalStorage:', error);
		}
	}
}

let storage_service = new StorageService;
export { storage_service };