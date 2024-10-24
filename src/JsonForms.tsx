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
	errorStyleData:any
}
export class JsonForms extends Component<JsonFormsProps<CustomStyle>,AppState>{
	shouldUpdate:boolean;
	data:any;
	lognode:string;
	constructor(props:any){
		super(props);
		this.lognode="JsonForms.tsx";
		this.log("constructor:beg");
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
			errorStyleData:undefined
		};
		this.log("constructor:end");
	}
	render():ReactNode{
		this.log("render:beg");
		let ret;
		if(
			this.state.errorSchema||
			this.state.errorUiSchema||
			//this.state.errorInitData||
			this.state.errorI18nData||
			this.state.errorStyleData
		){
			try{
				ret=(
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
			}catch(e){
				console.error(e.toString());
			}
		}else{
			ret=(
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
							debugon={this.props.debugon??false}
						/>
					</View>
					);
		}
		this.log("render:end");
		return(ret);
	}
	componentDidMount():void{
		this.log("componentDidMount:beg");
		const{mxSchema,mxUiSchema,/*mxInitData,*/mxI18nData,mxStyleData,mxFormData,mxLanguage,mxReadOnly}=this.props;
		let inputSchema=mxSchema.value?mxSchema.value.toString():"{}";
		let inputUISchema=mxUiSchema.value?mxUiSchema.value.toString():"{}";
		let inputI18nData=mxI18nData.value?mxI18nData.value.toString():"{}";
		let inputStyleData=mxStyleData.value?mxStyleData.value.toString():"{}";
		inputStyleData=inputStyleData.length==0?"{}":inputStyleData;
		let inputFormData=mxFormData.value?mxFormData.value.toString():"{}";//ockert
		let inputLanguage=mxLanguage.value?mxLanguage.value.toString():"";
		let inputReadOnly=mxReadOnly.value??false;
		let eSchema=isValidJSON(inputSchema);
		let eUiSchema=isValidJSON(inputUISchema);
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
		this.log("componentDidMount:end");
	}
	componentDidUpdate(prevProps:Readonly<JsonFormsProps<CustomStyle>>):void{
		this.log("componentDidUpdate:beg");
		const{mxSchema,mxUiSchema,/*mxInitData,*/mxI18nData,mxStyleData,mxFormData,mxLanguage,mxReadOnly}=this.props;
		if(
			mxSchema.value!==prevProps.mxSchema.value||
			mxUiSchema.value!==prevProps.mxUiSchema.value||
			mxI18nData.value!==prevProps.mxI18nData.value||
			mxStyleData.value!==prevProps.mxStyleData.value||
			mxFormData.value!==prevProps.mxFormData.value||
			mxLanguage.value!==prevProps.mxLanguage.value||
			mxReadOnly.value!==prevProps.mxReadOnly.value
		){
			let inputSchema=mxSchema.value?.toString()||"{}";
			let inputUISchema=mxUiSchema!.value?.toString()||"{}";
			let inputI18nData=mxI18nData!.value?.toString()||"{}";
			let inputStyleData=mxStyleData.value?.toString()||"{}";
			let inputFormData=mxFormData.value?.toString()||"{}";
			let inputLanguage=mxLanguage!.value?.toString()||"";
			let inputReadOnly=mxReadOnly!.value||false;
			let eSchema=isValidJSON(inputSchema);
			let eUiSchema=isValidJSON(inputUISchema);
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
				i18nData:inputI18nData,
				styleData:inputStyleData,
				formData:inputFormData,
				language:inputLanguage,
				readOnly:inputReadOnly,
				errorSchema:eSchema,
				errorUiSchema:eUiSchema,
				errorI18nData:eI18nData
			});
		}
		this.log("componentDidUpdate:end");
	}
	shouldComponentUpdate(_nextProps:Readonly<JsonFormsProps<CustomStyle>>){
		this.log("shouldComponentUpdate:beg");
		let ret=true;
		this.log("shouldComponentUpdate:end");
		return(ret);
	}
	onChange(data:any):void{
		this.log("onChange:beg");
		let obj=JSON.parse(this.state.formData);
		Object.keys(data).forEach((k)=>{
			//if(data[k]==null||data[k]=="")return;
			obj[k]=data[k]
		});
		let sobj=JSON.stringify(obj);
		if(sobj!=this.props.mxFormData.value)this.props.mxFormData.setValue(sobj);
		this.log("onChange:end");
	}
	componentWillUnmount(){
		this.log("componentWillUnmount:beg");
		this.log("componentWillUnmount:end");
	}
	log(data:any):void{
		if(this.props.debugon??false)console.info(this.lognode+":"+data);
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
