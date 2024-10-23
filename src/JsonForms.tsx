import{Component}from"react";
import{ReactNode}from"react";
import{createElement}from"react";
//import{useState}from"react";
//import{useEffect}from"react";
import{TextStyle,ViewStyle,View}from"react-native";
import{Style}from"@mendix/pluggable-widgets-tools";
import{JsonFormsProps}from"../typings/JsonFormsProps";
import{Form}from"../src/renderer/Form";
import{ErrorItem}from"./renderer/util/Error";
export interface CustomStyle extends Style{
	container:ViewStyle;
	label:TextStyle;
}
interface AppState{
	schema:string;
	uischema:string;
	//initData:string;	
	i18nData:string;
	styleData:string;
	language:string;
	formData:string;
	readOnly:boolean;
	errorSchema:any;
	errorUiSchema:any;
	//errorInitData:any;
	errorI18nData:any;
	errorStyleData:any;
	debugon:boolean;
}
export class JsonForms extends Component<JsonFormsProps<CustomStyle>,AppState>{
	shouldUpdate:boolean;
	data:any;
	constructor(props:any){
		super(props);
		this.shouldUpdate=true;
		this.data={};
		this.onChange=this.onChange.bind(this);
		this.state={
			schema:"{}",
			uischema:"{}",
			//initData:"{}",
			i18nData:"{}",
			styleData:"{}",
			language:"",
			formData:"{}",
			readOnly:false,
			errorSchema:undefined,
			errorUiSchema:undefined,
			//errorInitData:undefined,
			errorI18nData:undefined,
			errorStyleData:undefined,
			debugon:false,
		};
	}
	render():ReactNode{
		//console.info("render:beg");
		if(
			this.state.errorSchema||
			this.state.errorUiSchema||
			//this.state.errorInitData||
			this.state.errorI18nData||
			this.state.errorStyleData
		){
			/*
					{(this.state.errorInitData)
						?<ErrorItem message={"Error in Init Data:"+this.state.errorInitData}/>
						:""
					}
			*/
			//console.info("render:error:beg");
			try{
				let ret=(
					<View>
						{(this.state.errorSchema)
							?<ErrorItem message={"Error in Schema:"+this.state.errorSchema}/>
							:""
						}
						{(this.state.errorUiSchema)
							?<ErrorItem message={"Error in UISchema:"+this.state.errorUiSchema}/>
							:""
						}
						{(this.state.errorI18nData)
							?<ErrorItem message={"Error in I18n Data:"+this.state.errorI18nData}/>
							:""
						}
						{(this.state.errorStyleData)
							?<ErrorItem message={"Error in Style Data:"+this.state.errorStyleData}/>
							:""
						}
					</View>
				);
				return(ret);
			}catch(e){
				console.error(e.toString());
			}
		}else{
			//console.info("render:jsonform:beg");
			//console.info("render:jsonform:formData:"+(this.state.formData));
							
							//initData={ JSON.parse(this.state.initData) }
			return(
					<View>
						<Form
							schema={   JSON.parse(this.state.schema)   }
							uischema={ JSON.parse(this.state.uischema) }
							i18nData={ JSON.parse(this.state.i18nData) }
							formData={ JSON.parse(this.state.formData) }
							style={
								(()=>{
									try{
										return(this.props.mxStyleData.value?JSON.parse(this.props.mxStyleData.value):{});
									}catch(e){
										console.error(e.toString());
										return({});
									}
								})()
							}
							language={this.state.language}
							readOnly={this.state.readOnly}
							onChange={this.onChange}
							logger={this.logger}
						/>
					</View>
					);
		}
	}
	componentDidMount():void{
		//console.info("componentDidMount():beg");
		const{mxSchema,mxUiSchema,/*mxInitData,*/mxI18nData,mxStyleData,mxFormData,mxLanguage,mxReadOnly}=this.props;
		let inputSchema=mxSchema.value?mxSchema.value.toString():"{}";
		let inputUISchema=mxUiSchema.value?mxUiSchema.value.toString():"{}";
		//let inputInitData=mxInitData.value?mxInitData.value.toString():"{}";
		let inputI18nData=mxI18nData.value?mxI18nData.value.toString():"{}";
		//let inputStyleData=mxStyleData?mxStyleData:"{}";//original
		let inputStyleData=mxStyleData.value?mxStyleData.value.toString():"{}";
		inputStyleData=inputStyleData.length==0?"{}":inputStyleData;
		let inputFormData=mxFormData.value?mxFormData.value.toString():"{}";//ockert
		let inputLanguage=mxLanguage.value?mxLanguage.value.toString():"";
		let inputReadOnly=mxReadOnly.value??false;
		let eSchema=isValidJSON(inputSchema);
		let eUiSchema=isValidJSON(inputUISchema);
		//let eInitData=isValidJSON(inputInitData);
		let eI18nData=isValidJSON(inputI18nData);
		let eStyleData=isValidJSON(inputStyleData);
		let eFormData=isValidJSON(inputFormData);
		if(eSchema){
			console.debug(eSchema);
			inputSchema="{}";
		}		
		if(eUiSchema){
			console.debug(eUiSchema);
			inputUISchema="{}";
		}
		/*
		if(eInitData){
			console.debug(eInitData);
			inputUISchema="{}";
		}
		*/
		if(eI18nData){
			console.debug(eI18nData);
			inputI18nData="{}";
		}
		if(eStyleData){
			console.debug(eStyleData);
			inputStyleData="{}";
		}
		if(eFormData){
			console.debug(eFormData);
			inputFormData="{}";
		}
		this.setState({
			schema:inputSchema,
			uischema:inputUISchema,
			//initData:inputInitData,
			i18nData:inputI18nData,
			styleData:inputStyleData,
			formData:inputFormData,//ockert
			language:inputLanguage,
			readOnly:inputReadOnly,
			errorSchema:eSchema,
			errorUiSchema:eUiSchema,
			//errorInitData:eInitData,
			errorI18nData:eI18nData,
			errorStyleData:eStyleData
		});
		//console.info("componentDidMount():end");
	}
	componentDidUpdate(prevProps:Readonly<JsonFormsProps<CustomStyle>>):void{
		//console.info("componentDidUpdate():beg");
		//console.info("componentDidUpdate():mxFormData:"+(this.props.mxFormData.value||"{empty}"));
		const{mxSchema,mxUiSchema,/*mxInitData,*/mxI18nData,mxStyleData,mxFormData,mxLanguage,mxReadOnly}=this.props;
		if(
			mxSchema.value!==prevProps.mxSchema.value||
			mxUiSchema.value!==prevProps.mxUiSchema.value||
			//mxInitData.value!==prevProps.mxInitData.value||
			mxI18nData.value!==prevProps.mxI18nData.value||
			//mxStyleData!==prevProps.mxStyleData||//original
			mxStyleData.value!==prevProps.mxStyleData.value||
			mxFormData.value!==prevProps.mxFormData.value||
			mxLanguage.value!==prevProps.mxLanguage.value||
			mxReadOnly.value!==prevProps.mxReadOnly.value
		){
			//console.info("componentDidUpdate():>>>");
			let inputSchema=mxSchema.value?.toString()||"{}";
			let inputUISchema=mxUiSchema!.value?.toString()||"{}";
			//let inputInitData=mxInitData!.value?.toString()||"{}";
			let inputI18nData=mxI18nData!.value?.toString()||"{}";
			//let inputStyleData=mxStyleData||"{}";//original
			let inputStyleData=mxStyleData.value?.toString()||"{}";
			let inputFormData=mxFormData.value?.toString()||"{}";
			let inputLanguage=mxLanguage!.value?.toString()||"";
			let inputReadOnly=mxReadOnly!.value||false;
			let eSchema=isValidJSON(inputSchema);
			let eUiSchema=isValidJSON(inputUISchema);
			//let eInitData=isValidJSON(inputInitData);
			let eI18nData=isValidJSON(inputI18nData);
			let eStyleData=isValidJSON(inputStyleData);
			let eFormData=isValidJSON(inputFormData);
			if(eSchema){
				console.debug(eSchema);
				inputSchema="{}";
			}
			if(eUiSchema){
				console.debug(eUiSchema);
				inputUISchema="{}";
			}
			/*
			if(eInitData){
				console.debug(eInitData);
				inputInitData="{}";
			}
			*/
			if(eI18nData){
				console.debug(eI18nData);
				inputI18nData="{}";
			}
			if(eStyleData){
				console.debug(eStyleData);
				inputStyleData="{}";
			}
			if(eFormData){
				console.debug(eFormData);
				inputFormData="{}";
			}
			this.setState({
				schema:inputSchema,
				uischema:inputUISchema,
				//initData:inputInitData,
				i18nData:inputI18nData,
				styleData:inputStyleData,
				formData:inputFormData,//this.props.mxFormData.value||"{}",//ockert - added
				language:inputLanguage,
				readOnly:inputReadOnly,
				errorSchema:eSchema,
				errorUiSchema:eUiSchema,
				//errorInitData:eInitData,
				errorI18nData:eI18nData
			});
		}
		//console.info("componentDidUpdate():state.formData:"+(this.state.formData||"{empty}"));
		//console.info("componentDidUpdate():end");
	}
	shouldComponentUpdate(_nextProps:Readonly<JsonFormsProps<CustomStyle>>){
		//console.info("shouldComponentUpdate:beg");
		//nextProps=nextProps;
		let ret=true;
		//if(this.props.mxFormData.value==nextProps.mxFormData.value)ret=false;
		//console.info("shouldComponentUpdate:end");
		return(ret);
	}
	onChange(data:any):void{
		//console.info("onChange:beg");
		//console.info("onChange:data:"+JSON.stringify(data));
		//console.info("onChange():state.formData:"+(this.state.formData||"{empty}"));
		let obj=JSON.parse(this.state.formData);
		Object.keys(data).forEach((k)=>{
			//if(data[k]==null||data[k]=="")return;
			obj[k]=data[k]
		});
		let sobj=JSON.stringify(obj);
		if(sobj!=this.props.mxFormData.value)this.props.mxFormData.setValue(sobj);
		//this.data=obj;
		//this.setState({
		//	formData:JSON.stringify(obj)
		//});
		//console.info("onChange:end");
/*
			if(data[k]==null||data[k]==""){
				delete obj[k];//todo:define behavior for ""
			}else{
				if(parseNumber(data[k])!=isNaN(parseNumber(data[k]))){
					obj[k]=parseNumber(data[k])
				}else if(data[k]=="true"){
					obj[k]=true;
				}else if(data[k]=="false"){
					obj[k]=false;
				}
				obj[k]=data[k]
			}

*/
	}
	logger(data:any):void{
		if(this.state.debugon)console.info(data);
	}
	componentWillUnmount(){
		//console.info("componentWillUnmount():beg");
		//console.info("componentWillUnmount():end");
	}
}
function isValidJSON(jsonString:string){
	try{
		JSON.parse(jsonString);
		return undefined;
	}catch(e){
		return e.message;
	}
}
