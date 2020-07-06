class lazyLoadImage {
    constructor(documentID, lowRes, highRes, location, time, blur, delay) {
		this._elementID = documentID;
		this._lowResImageURL = lowRes;
		this._highResImageURL = highRes;        
		this._parentElementID = location;
		this._transitionTime = time || 1;
		this._blurAmount = blur || 20;

		const timeDelay = delay || 1000;
		
		this.outputImage();
		this.addTransitionTimeToCSS();
		this.addBlurAmountToCSS();

		var self = this;
		setTimeout(function(){ 
			self.beginLazyLoading();
		}, timeDelay);
	}
	
	// Methods

	// start the lazy load functionality. Change the class and background URL
	beginLazyLoading(){

		const holderElement = document.getElementById(this._elementID);
		const imageTag = holderElement.querySelector('img');
		const highResImage = this._highResImageURL

		imageTag.src = highResImage;
		
		imageTag.addEventListener('load', function() {
			
			holderElement.style.backgroundImage = 'url(' + highResImage + ')';
			holderElement.className = holderElement.className + ' is-loaded';
		});
	}

	// add dynamic transition time to CSS
	addTransitionTimeToCSS(){
		document.getElementById(this._elementID).style.transition = 'filter '+this._transitionTime+'s';
	}

	// add dynamic blur amount to CSS
	addBlurAmountToCSS(){
		document.getElementById(this._elementID).style.filter = 'blur('+this._blurAmount+'px)';
	}
	
	//output image and holder output
	outputImage() {
        var imageHtml = "<div data-image-full='"+this._highResImageURL+"' style='background-image: url("+this._lowResImageURL+");' class='lazy-load-image' id='" + this._elementID + "'>";
        imageHtml += "<img src=''>";
        imageHtml += "</div>";
        document.getElementById(this._parentElementID).innerHTML = imageHtml;
	}

    //Low Res Image URL getter/setter
    get lowResImageURL() {
        return this._lowResImageURL;
    }
    set lowResImageURL(x) {
        this._lowResImageURL = x;
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

    //parentElementID getter/setter
    get parentElementID() {
		return this._parentElementID;
	}
	set parentElementID(x) {
        this._parentElementID = x;
	}
	
	//transition time getter/setter
    get transitionTime() {
		return this._transitionTime;
	}
	set transitionTime(x) {
        this._transitionTime = x;
	}
	
	//blur pxs getter/setter
    get blurAmount() {
		return this._blurAmount;
	}
	set blurAmount(x) {
        this._blurAmount = x;
    }
}
