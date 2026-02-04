const getBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
	return new Promise((resolve, reject) => {
		if (!file.type.startsWith('image/')) {
			return;
		}

		const reader = new FileReader();

		reader.onload = (e: ProgressEvent<FileReader>) => {
			resolve(e.target?.result ?? null);
		};

		reader.onerror = (error) => {
			reject(error);
		};

		reader.readAsDataURL(file);
	});
};

export default getBase64;