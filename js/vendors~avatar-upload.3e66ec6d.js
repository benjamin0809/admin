(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendors~avatar-upload"],{"0b4d":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"vue-image-crop-upload"},[i("div",{staticClass:"vicp-wrap"},[i("div",{staticClass:"vicp-close",on:{click:e.off}},[i("i",{staticClass:"vicp-icon4"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],staticClass:"vicp-step1"},[i("div",{staticClass:"vicp-drop-area",on:{dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,click:e.handleClick,drop:e.handleChange}},[i("i",{directives:[{name:"show",rawName:"v-show",value:1!=e.loading,expression:"loading != 1"}],staticClass:"vicp-icon1"},[i("i",{staticClass:"vicp-icon1-arrow"}),i("i",{staticClass:"vicp-icon1-body"}),i("i",{staticClass:"vicp-icon1-bottom"})]),i("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[e._v(e._s(e.lang.hint))]),i("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[e._v(e._s(e.lang.noSupported))]),1==e.step?i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file"},on:{change:e.handleChange}}):e._e()]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+" ")]),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.off))])])]),2==e.step?i("div",{staticClass:"vicp-step2"},[i("div",{staticClass:"vicp-crop"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[i("div",{staticClass:"vicp-img-container"},[i("img",{ref:"img",staticClass:"vicp-img",style:e.sourceImgStyle,attrs:{src:e.sourceImgUrl,draggable:"false"},on:{drag:e.preventDefault,dragstart:e.preventDefault,dragend:e.preventDefault,dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,drop:e.preventDefault,touchstart:e.imgStartMove,touchmove:e.imgMove,touchend:e.createImg,touchcancel:e.createImg,mousedown:e.imgStartMove,mousemove:e.imgMove,mouseup:e.createImg,mouseout:e.createImg}}),i("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:e.sourceImgShadeStyle}),i("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:e.sourceImgShadeStyle})]),i("div",{staticClass:"vicp-range"},[i("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:e.scale.range},on:{mousemove:e.zoomChange}}),i("i",{staticClass:"vicp-icon5",on:{mousedown:e.startZoomSub,mouseout:e.endZoomSub,mouseup:e.endZoomSub}}),i("i",{staticClass:"vicp-icon6",on:{mousedown:e.startZoomAdd,mouseout:e.endZoomAdd,mouseup:e.endZoomAdd}})]),e.noRotate?e._e():i("div",{staticClass:"vicp-rotate"},[i("i",{on:{click:e.rotateImg}},[e._v("↻")])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[i("div",{staticClass:"vicp-preview"},[e.noSquare?e._e():i("div",{staticClass:"vicp-preview-item"},[i("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),i("span",[e._v(e._s(e.lang.preview))])]),e.noCircle?e._e():i("div",{staticClass:"vicp-preview-item vicp-preview-item-circle"},[i("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),i("span",[e._v(e._s(e.lang.preview))])])])])]),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(t){return e.setStep(1)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),i("a",{staticClass:"vicp-operate-btn",on:{click:e.prepareUpload,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.save))])])]):e._e(),3==e.step?i("div",{staticClass:"vicp-step3"},[i("div",{staticClass:"vicp-upload"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[e._v(e._s(e.lang.loading))]),i("div",{staticClass:"vicp-progress-wrap"},[i("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:e.progressStyle})]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[i("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:2===e.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[i("i",{staticClass:"vicp-icon3"}),e._v(" "+e._s(e.lang.success)+" ")])]),i("div",{staticClass:"vicp-operate"},[i("a",{on:{click:function(t){return e.setStep(2)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),i("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.close))])])]):e._e(),i("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:e.width,height:e.height}})])])},s=[],o=(i("c975"),i("b0c0"),i("a9e3"),i("b64b"),i("d3b7"),i("159b"),i("53ca")),r={zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},"zh-tw":{hint:"點擊，或拖動圖片至此處",loading:"正在上傳……",noSupported:"瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！",success:"上傳成功",fail:"圖片上傳失敗",preview:"頭像預覽",btn:{off:"取消",close:"關閉",back:"上一步",save:"保存"},error:{onlyImg:"僅限圖片格式",outOfSize:"單文件大小不能超過 ",lowestPx:"圖片最低像素為（寬*高）："}},en:{hint:"Click or drag the file here to upload",loading:"Uploading…",noSupported:"Browser is not supported, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"Image's size is too low. Expected at least: "}},ro:{hint:"Atinge sau trage fișierul aici",loading:"Se încarcă",noSupported:"Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.",success:"S-a încărcat cu succes",fail:"A apărut o problemă la încărcare",preview:"Previzualizează",btn:{off:"Anulează",close:"Închide",back:"Înapoi",save:"Salvează"},error:{onlyImg:"Doar imagini",outOfSize:"Imaginea depășește limita de: ",loewstPx:"Imaginea este prea mică; Minim: "}},ru:{hint:"Нажмите, или перетащите файл в это окно",loading:"Загружаю……",noSupported:"Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры",success:"Загрузка выполнена успешно",fail:"Ошибка загрузки",preview:"Предпросмотр",btn:{off:"Отменить",close:"Закрыть",back:"Назад",save:"Сохранить"},error:{onlyImg:"Только изображения",outOfSize:"Изображение превышает предельный размер: ",lowestPx:"Минимальный размер изображения: "}},"pt-br":{hint:"Clique ou arraste o arquivo aqui para carregar",loading:"Carregando…",noSupported:"Browser não suportado, use o IE10+ ou outro browser",success:"Sucesso ao carregar imagem",fail:"Falha ao carregar imagem",preview:"Pré-visualizar",btn:{off:"Cancelar",close:"Fechar",back:"Voltar",save:"Salvar"},error:{onlyImg:"Apenas imagens",outOfSize:"A imagem excede o limite de tamanho: ",lowestPx:"O tamanho da imagem é muito pequeno. Tamanho mínimo: "}},fr:{hint:"Cliquez ou glissez le fichier ici.",loading:"Téléchargement…",noSupported:"Votre navigateur n'est pas supporté. Utilisez IE10 + ou un autre navigateur s'il vous plaît.",success:"Téléchargement réussit",fail:"Téléchargement echoué",preview:"Aperçu",btn:{off:"Annuler",close:"Fermer",back:"Retour",save:"Enregistrer"},error:{onlyImg:"Image uniquement",outOfSize:"L'image sélectionnée dépasse la taille maximum: ",lowestPx:"L'image sélectionnée est trop petite. Dimensions attendues: "}},nl:{hint:"Klik hier of sleep een afbeelding in dit vlak",loading:"Uploaden…",noSupported:"Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.",success:"Upload succesvol",fail:"Upload mislukt",preview:"Voorbeeld",btn:{off:"Annuleren",close:"Sluiten",back:"Terug",save:"Opslaan"},error:{onlyImg:"Alleen afbeeldingen",outOfSize:"De afbeelding is groter dan: ",lowestPx:"De afbeelding is te klein! Minimale afmetingen: "}},tr:{hint:"Tıkla veya yüklemek istediğini buraya sürükle",loading:"Yükleniyor…",noSupported:"Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın",success:"Yükleme başarılı",fail:"Yüklemede hata oluştu",preview:"Önizle",btn:{off:"İptal",close:"Kapat",back:"Geri",save:"Kaydet"},error:{onlyImg:"Sadece resim",outOfSize:"Resim yükleme limitini aşıyor: ",lowestPx:"Resmin boyutu çok küçük. En az olması gereken: "}},"es-MX":{hint:"Selecciona o arrastra una imagen",loading:"Subiendo...",noSupported:"Tu navegador no es soportado, por favor usa IE10+ u otros navegadores más recientes",success:"Subido exitosamente",fail:"Sucedió un error",preview:"Vista previa",btn:{off:"Cancelar",close:"Cerrar",back:"Atrás",save:"Guardar"},error:{onlyImg:"Únicamente imágenes",outOfSize:"La imagen excede el tamaño maximo:",lowestPx:"La imagen es demasiado pequeña. Se espera por lo menos:"}},de:{hint:"Klick hier oder zieh eine Datei hier rein zum Hochladen",loading:"Hochladen…",noSupported:"Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser",success:"Upload erfolgreich",fail:"Upload fehlgeschlagen",preview:"Vorschau",btn:{off:"Abbrechen",close:"Schließen",back:"Zurück",save:"Speichern"},error:{onlyImg:"Nur Bilder",outOfSize:"Das Bild ist zu groß: ",lowestPx:"Das Bild ist zu klein. Mindestens: "}},ja:{hint:"クリック・ドラッグしてファイルをアップロード",loading:"アップロード中...",noSupported:"このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。",success:"アップロード成功",fail:"アップロード失敗",preview:"プレビュー",btn:{off:"キャンセル",close:"閉じる",back:"戻る",save:"保存"},error:{onlyImg:"画像のみ",outOfSize:"画像サイズが上限を超えています。上限: ",lowestPx:"画像が小さすぎます。最小サイズ: "}},ua:{hint:"Натисніть, або перетягніть файл в це вікно",loading:"Завантажую……",noSupported:"Ваш браузер не підтримується, будь ласка скористайтесь IE10 + або іншими браузерами",success:"Завантаження виконано успішно",fail:"Помилка завантаження",preview:"Попередній перегляд",btn:{off:"Відмінити",close:"Закрити",back:"Назад",save:"Зберегти"},error:{onlyImg:"Тільки зображення",outOfSize:"Зображення перевищує граничний розмір: ",lowestPx:"Мінімальний розмір зображення: "}},it:{hint:"Clicca o trascina qui il file per caricarlo",loading:"Caricamento del file…",noSupported:"Browser non supportato, per favore usa IE10+ o un altro browser",success:"Caricamento completato",fail:"Caricamento fallito",preview:"Anteprima",btn:{off:"Annulla",close:"Chiudi",back:"Indietro",save:"Salva"},error:{onlyImg:"Sono accettate solo immagini",outOfSize:"L'immagine eccede i limiti di dimensione: ",lowestPx:"L'immagine è troppo piccola. Il requisito minimo è: "}},ar:{hint:"اضغط أو اسحب الملف هنا للتحميل",loading:"جاري التحميل...",noSupported:"المتصفح غير مدعوم ، يرجى استخدام IE10 + أو متصفح أخر",success:"تم التحميل بنجاح",fail:"فشل التحميل",preview:"معاينه",btn:{off:"إلغاء",close:"إغلاق",back:"رجوع",save:"حفظ"},error:{onlyImg:"صور فقط",outOfSize:"تتجاوز الصوره الحجم المحدد: ",lowestPx:"حجم الصورة صغير جدا. من المتوقع على الأقل: "}},ug:{hint:"مەزكۇر دائىرىنى چىكىپ رەسىم تاللاڭ ياكى رەسىمنى سۆرەپ ئەكىرىڭ",loading:"يوللىنىۋاتىدۇ...",noSupported:"تور كۆرگۈچ بۇ ئىقتىدارنى قوللىمايدۇ ، يۇقىرى نەشىردىكى تور كۆرگۈچنى ئىشلىتىڭ",success:"غەلبىلىك بولدى",fail:"مەغلۇب بولدى",preview:"ئۈنۈم رەسىم",btn:{off:"بولدى قىلىش",close:"تاقاش",back:"ئالدىنقى قەدەم",save:"ساقلاش"},error:{onlyImg:"پەقەت رەسىم فورماتىنىلا قوللايدۇ",outOfSize:"رەسىم چوڭ - كىچىكلىكى چەكتىن ئىشىپ كەتتى",lowestPx:"رەسىمنىڭ ئەڭ كىچىك ئۆلچىمى :"}},th:{hint:"คลิ๊กหรือลากรูปมาที่นี่",loading:"กำลังอัพโหลด…",noSupported:"เบราเซอร์ไม่รองรับ, กรุณาใช้ IE เวอร์ชั่น 10 ขึ้นไป หรือใช้เบราเซอร์ตัวอื่น",success:"อัพโหลดสำเร็จ",fail:"อัพโหลดล้มเหลว",preview:"ตัวอย่าง",btn:{off:"ยกเลิก",close:"ปิด",back:"กลับ",save:"บันทึก"},error:{onlyImg:"ไฟล์ภาพเท่านั้น",outOfSize:"ไฟล์ใหญ่เกินกำหนด: ",lowestPx:"ไฟล์เล็กเกินไป. อย่างน้อยต้องมีขนาด: "}},mm:{hint:"ဖိုင်ကို ဤနေရာတွင် နှိပ်၍ (သို့) ဆွဲထည့်၍ တင်ပါ",loading:"တင်နေသည်…",noSupported:"ဤဘရောက်ဇာကို အထောက်အပံ့ မပေးပါ၊ ကျေးဇူးပြု၍ IE10+ သို့မဟုတ် အခြား ဘရောက်ဇာ ကို အသုံးပြုပါ",success:"ဖိုင်တင်နေမှု မပြီးမြောက်ပါ",fail:"ဖိုင်တင်နေမှု မအောင်မြင်ပါ",preview:"အစမ်းကြည့်",btn:{off:"မလုပ်တော့ပါ",close:"ပိတ်မည်",back:"နောက်သို့",save:"သိမ်းမည်"},error:{onlyImg:"ဓာတ်ပုံ သီးသန့်သာ",outOfSize:"ဓာတ်ပုံဆိုဒ် ကြီးလွန်းသည် ။ အများဆုံး ဆိုဒ် : ",lowestPx:"ဓာတ်ပုံဆိုဒ် သေးလွန်းသည်။ အနည်းဆုံး ဆိုဒ် : "}},se:{hint:"Klicka eller dra en fil hit för att ladda upp den",loading:"Laddar upp…",noSupported:"Din webbläsare stöds inte, vänligen använd IE10+ eller andra webbläsare",success:"Uppladdning lyckades",fail:"Uppladdning misslyckades",preview:"Förhandsgranska",btn:{off:"Avbryt",close:"Stäng",back:"Tillbaka",save:"Spara"},error:{onlyImg:"Endast bilder",outOfSize:"Bilden är större än max-gränsen: ",lowestPx:"Bilden är för liten. Minimum är: "}}},n={jpg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",psd:"image/photoshop"},l=function(e,t){e=e.split(",")[1],e=window.atob(e);for(var i=new Uint8Array(e.length),a=0;a<e.length;a++)i[a]=e.charCodeAt(a);return new Blob([i],{type:t})},c=function(e,t){var i=Object.assign({ele:e.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},t),a=i.ele;if(a){var s=a.getBoundingClientRect(),o=a.querySelector(".e-ripple");switch(o?o.className="e-ripple":(o=document.createElement("span"),o.className="e-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",a.appendChild(o)),i.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=e.pageY-s.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=e.pageX-s.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=i.bgc,o.className="e-ripple z-active",!1}},u={props:{field:{type:String,default:"avatar"},ki:{default:0},value:{default:!0},url:{type:String,default:""},params:{type:Object,default:null},headers:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noRotate:{type:Boolean,default:!0},noCircle:{type:Boolean,default:!1},noSquare:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"},langExt:{type:Object,default:null},imgFormat:{type:String,default:"png"},imgBgc:{type:String,default:"#fff"},withCredentials:{type:Boolean,default:!1},method:{type:String,default:"POST"}},data:function(){var e=this,t=e.imgFormat,i=e.langType,a=e.langExt,s=e.width,o=e.height,l=!0,c=["jpg","png"],u=-1===c.indexOf(t)?"jpg":t,p=r[i]?r[i]:r["en"],h=n[u];return e.imgFormat=u,a&&Object.assign(p,a),"function"!=typeof FormData&&(l=!1),{mime:h,lang:p,isSupported:l,isSupportTouch:document.hasOwnProperty("ontouchstart"),step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:s/o,sourceImg:null,sourceImgUrl:"",createImgUrl:"",sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:184},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){var e=this.progress;return{width:e+"%"}},sourceImgStyle:function(){var e=this.scale,t=this.sourceImgMasking,i=e.y+t.y+"px",a=e.x+t.x+"px";return{top:i,left:a,width:e.width+"px",height:e.height+"px"}},sourceImgMasking:function(){var e=this.width,t=this.height,i=this.ratio,a=this.sourceImgContainer,s=a,o=s.width/s.height,r=0,n=0,l=s.width,c=s.height,u=1;return i<o&&(u=s.height/t,l=s.height*i,r=(s.width-l)/2),i>o&&(u=s.width/e,c=s.width/i,n=(s.height-c)/2),{scale:u,x:r,y:n,width:l,height:c}},sourceImgShadeStyle:function(){var e=this.sourceImgMasking,t=this.sourceImgContainer,i=t,a=e,s=a.width==i.width?a.width:(i.width-a.width)/2,o=a.height==i.height?a.height:(i.height-a.height)/2;return{width:s+"px",height:o+"px"}},previewStyle:function(){this.width,this.height;var e=this.ratio,t=this.previewContainer,i=t,a=i.width,s=i.height,o=a/s;return e<o&&(a=i.height*e),e>o&&(s=i.width/e),{width:a+"px",height:s+"px"}}},watch:{value:function(e){e&&1!=this.loading&&this.reset()}},methods:{ripple:function(e){c(e)},off:function(){var e=this;setTimeout((function(){e.$emit("input",!1),3==e.step&&2==e.loading&&e.setStep(1)}),200)},setStep:function(e){var t=this;setTimeout((function(){t.step=e}),200)},preventDefault:function(e){return e.preventDefault(),!1},handleClick:function(e){1!==this.loading&&e.target!==this.$refs.fileinput&&(e.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(e){if(e.preventDefault(),1!==this.loading){var t=e.target.files||e.dataTransfer.files;this.reset(),this.checkFile(t[0])&&this.setSourceImg(t[0])}},checkFile:function(e){var t=this,i=t.lang,a=t.maxSize;return-1===e.type.indexOf("image")?(t.hasError=!0,t.errorMsg=i.error.onlyImg,!1):!(e.size/1024>a)||(t.hasError=!0,t.errorMsg=i.error.outOfSize+a+"kb",!1)},reset:function(){var e=this;e.loading=0,e.hasError=!1,e.errorMsg="",e.progress=0},setSourceImg:function(e){this.$emit("src-file-set",e.name,e.type,e.size);var t=this,i=new FileReader;i.onload=function(e){t.sourceImgUrl=i.result,t.startCrop()},i.readAsDataURL(e)},startCrop:function(){var e=this,t=e.width,i=e.height,a=e.ratio,s=e.scale,o=e.sourceImgUrl,r=e.sourceImgMasking,n=e.lang,l=r,c=new Image;c.src=o,c.onload=function(){var o=c.naturalWidth,r=c.naturalHeight,u=o/r,p=l.width,h=l.height,d=0,g=0;if(o<t||r<i)return e.hasError=!0,e.errorMsg=n.error.lowestPx+t+"*"+i,!1;a>u&&(h=p/u,g=(l.height-h)/2),a<u&&(p=h*u,d=(l.width-p)/2),s.range=0,s.x=d,s.y=g,s.width=p,s.height=h,s.minWidth=p,s.minHeight=h,s.maxWidth=o*l.scale,s.maxHeight=r*l.scale,s.naturalWidth=o,s.naturalHeight=r,e.sourceImg=c,e.createImg(),e.setStep(2)}},imgStartMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,i=this.sourceImgMouseDown,a=this.scale,s=i;s.mX=t.screenX,s.mY=t.screenY,s.x=a.x,s.y=a.y,s.on=!0},imgMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,i=this.sourceImgMouseDown,a=i.on,s=i.mX,o=i.mY,r=i.x,n=i.y,l=this.scale,c=this.sourceImgMasking,u=c,p=t.screenX,h=t.screenY,d=p-s,g=h-o,m=r+d,v=n+g;a&&(m>0&&(m=0),v>0&&(v=0),m<u.width-l.width&&(m=u.width-l.width),v<u.height-l.height&&(v=u.height-l.height),l.x=m,l.y=v)},rotateImg:function(e){var t=this.sourceImg,i=this.scale,a=i.naturalWidth,s=i.naturalHeight,o=s,r=a,l=this.$refs.canvas,c=l.getContext("2d");l.width=o,l.height=r,c.clearRect(0,0,o,r),c.fillStyle="rgba(0,0,0,0)",c.fillRect(0,0,o,r),c.translate(o,0),c.rotate(90*Math.PI/180),c.drawImage(t,0,0,a,s);var u=l.toDataURL(n["png"]);this.sourceImgUrl=u,this.startCrop()},startZoomAdd:function(e){var t=this,i=t.scale;function a(){if(i.zoomAddOn){var e=i.range>=100?100:++i.range;t.zoomImg(e),setTimeout((function(){a()}),60)}}i.zoomAddOn=!0,a()},endZoomAdd:function(e){this.scale.zoomAddOn=!1},startZoomSub:function(e){var t=this,i=t.scale;function a(){if(i.zoomSubOn){var e=i.range<=0?0:--i.range;t.zoomImg(e),setTimeout((function(){a()}),60)}}i.zoomSubOn=!0,a()},endZoomSub:function(e){var t=this.scale;t.zoomSubOn=!1},zoomChange:function(e){this.zoomImg(e.target.value)},zoomImg:function(e){var t=this,i=this.sourceImgMasking,a=(this.sourceImgMouseDown,this.scale),s=a.maxWidth,o=a.maxHeight,r=a.minWidth,n=a.minHeight,l=a.width,c=a.height,u=a.x,p=a.y,h=(a.range,i),d=h.width,g=h.height,m=r+(s-r)*e/100,v=n+(o-n)*e/100,f=d/2-m/l*(d/2-u),w=g/2-v/c*(g/2-p);f>0&&(f=0),w>0&&(w=0),f<d-m&&(f=d-m),w<g-v&&(w=g-v),a.x=f,a.y=w,a.width=m,a.height=v,a.range=e,setTimeout((function(){a.range==e&&t.createImg()}),300)},createImg:function(e){var t=this,i=t.imgFormat,a=t.imgBgc,s=t.mime,o=t.sourceImg,r=t.scale,n=r.x,l=r.y,c=r.width,u=r.height,p=t.sourceImgMasking.scale,h=t.$refs.canvas,d=h.getContext("2d");e&&(t.sourceImgMouseDown.on=!1),h.width=t.width,h.height=t.height,d.clearRect(0,0,t.width,t.height),d.fillStyle="png"==i?"rgba(0,0,0,0)":a,d.fillRect(0,0,t.width,t.height),d.drawImage(o,n/p,l/p,c/p,u/p),t.createImgUrl=h.toDataURL(s)},prepareUpload:function(){var e=this.url,t=this.createImgUrl,i=this.field,a=this.ki;this.$emit("crop-success",t,i,a),"string"==typeof e&&e?this.upload():this.off()},upload:function(){var e=this,t=this.lang,i=this.imgFormat,a=this.mime,s=this.url,r=this.params,n=this.headers,c=this.field,u=this.ki,p=this.createImgUrl,h=this.withCredentials,d=this.method,g=new FormData;g.append(c,l(p,a),c+"."+i),"object"==Object(o["a"])(r)&&r&&Object.keys(r).forEach((function(e){g.append(e,r[e])}));var m=function(t){t.lengthComputable&&(e.progress=100*Math.round(t.loaded)/t.total)};e.reset(),e.loading=1,e.setStep(3),new Promise((function(e,t){var i=new XMLHttpRequest;i.open(d,s,!0),i.withCredentials=h,i.onreadystatechange=function(){4===this.readyState&&(200===this.status||201===this.status?e(JSON.parse(this.responseText)):t(this.status))},i.upload.addEventListener("progress",m,!1),"object"==Object(o["a"])(n)&&n&&Object.keys(n).forEach((function(e){i.setRequestHeader(e,n[e])})),i.send(g)})).then((function(t){e.value&&(e.loading=2,e.$emit("crop-upload-success",t,c,u))}),(function(i){e.value&&(e.loading=3,e.hasError=!0,e.errorMsg=t.fail,e.$emit("crop-upload-fail",i,c,u))}))}},created:function(){var e=this;document.addEventListener("keyup",(function(t){!e.value||"Escape"!=t.key&&27!=t.keyCode||e.off()}))}},p=u,h=(i("2133"),i("2877")),d=Object(h["a"])(p,a,s,!1,null,null,null);t["a"]=d.exports},2133:function(e,t,i){"use strict";var a=i("b3fa"),s=i.n(a);s.a},b3fa:function(e,t,i){}}]);