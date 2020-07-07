class lazyLoadImage {
    constructor(documentID, highRes) {
		this._elementID = documentID;
		this._highResImageURL = highRes;
		this._transitionTime = 1;
		this._blurAmount = 20;
		this._delay = 1000;

		this.addLazyLoadClassToImgTag();
		this.addTransitionTimeToCSS();
		this.addBlurAmountToCSS();
	}
	
	// Methods

	initLazyLoading(){
		var self = this;
		setTimeout(function(){ 
			self.beginLazyLoading();
		}, this._delay);
	}

	// start the lazy load functionality. Change the class and background URL
	beginLazyLoading(){
		const imageTag = document.getElementById(this._elementID);
		const highResImage = this._highResImageURL

		imageTag.src = highResImage;
		
		imageTag.addEventListener('load', function() {
			imageTag.className = imageTag.className + ' is-loaded';
		});
	}

	// add lazy load classto img tag
	addLazyLoadClassToImgTag(){
		const imgElement = document.getElementById(this._elementID);
		imgElement.className = imgElement.className + 'lazy-load-image ';
	}

	// add dynamic transition time to CSS
	addTransitionTimeToCSS(){
		document.getElementById(this._elementID).style.transition = 'filter '+this._transitionTime+'s';
	}

	// add dynamic blur amount to CSS
	addBlurAmountToCSS(){
		document.getElementById(this._elementID).style.filter = 'blur('+this._blurAmount+'px)';
	}
	
	//High Res Image URL getter/setter
    get highResImageURL() {
        return this._highResImageURL;
    }
    set highResImageURL(x) {
        this._highResImageURL = x;
    }

    //elementID getter/setter
    get elementID() {
        return this._elementID;
    }
    set elementID(x) {
        this._elementID = x;
    }
	
	//transition time getter/setter
    get transitionTime() {
		return this._transitionTime;
	}
	set transitionTime(x) {
		this._transitionTime = x;
		this.addTransitionTimeToCSS();
	}
	
	//blur pxs getter/setter
    get blurAmount() {
		return this._blurAmount;
	}
	set blurAmount(x) {
		this._blurAmount = x;
		this.addBlurAmountToCSS();
	}
	
	//delay pxs getter/setter
    get delay() {
		return this._delay;
	}
	set delay(x) {
		this._delay = x;
    }
}
