import{useObject}from"../context/ObjectHook";
import{useState}from"react"
import{View,Text,TouchableOpacity,Platform}from"react-native";
import DateTimePicker from"@react-native-community/datetimepicker";
import{isEmpty}from"../util/Util"
import*as customVariables from"../theme/widget-variables";
import{mergeDeep}from"../../util/merge";
//A JSON Schema "format":"date" value is an RFC 3339 full-date, so the payload stays
//YYYY-MM-DD whatever the device locale is. Only the label shown to the user is localised.
const toIsoDate=(d:Date):string=>{
	const pad=(n:number)=>(n<10?"0":"")+n;
	return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
};
//Parsed as local midnight rather than through Date(string), which treats a bare YYYY-MM-DD
//as UTC and can land on the previous day west of Greenwich.
const fromIsoDate=(s:any):Date|null=>{
	if(typeof s!=="string")return null;
	const m=/^(\d{4})-(\d{2})-(\d{2})/.exec(s.trim());
	if(!m)return null;
	const d=new Date(Number(m[1]),Number(m[2])-1,Number(m[3]));
	return isNaN(d.getTime())?null:d;
};
export function DateControl(props:any){
	const state=useObject();
	let attr=props.props;
	//Styled through `input`, the same key the other text-like controls use. The picker itself
	//is drawn by the platform and takes no styling from here.
	let stylesInput:any={};
	mergeDeep(stylesInput,customVariables?.input,attr?.style?.input||{});
	const[error,setError]=useState(attr.error);
	const[value,setValue]=useState(attr.data||attr.value||"");
	const[show,setShow]=useState(false);
	const _onChange=(event:any,selected?:Date)=>{
		//Android closes on its own and reports a dismissal; iOS keeps the spinner open.
		if(Platform.OS==="android")setShow(false);
		if(event&&event.type==="dismissed")return;
		if(!selected)return;
		const iso=toIsoDate(selected);
		setValue(iso);
		state.formData[attr.propertyName]=iso;
		state.setFormData(state.formData);
		attr.onChange(state.formData);
		attr.error=isEmpty(iso);
		setError(attr.error);
	};
	const current=fromIsoDate(value)||new Date();
	return(
		<View>
			<Text style={stylesInput?.label}>{attr.label||"No label included"}</Text>
			<TouchableOpacity
				disabled={attr.readonly}
				onPress={()=>{if(!attr.readonly)setShow(true)}}
			>
				<View style={(state.showError&&error)?stylesInput?.inputError||{}:stylesInput?.input||{}}>
					<Text style={{color:stylesInput?.input?.color}}>
						{value?current.toLocaleDateString():attr.placeholder||""}
					</Text>
				</View>
			</TouchableOpacity>
			{show
				?<DateTimePicker
					value={current}
					mode="date"
					display={Platform.OS==="ios"?"spinner":"default"}
					onChange={_onChange}
				/>
				:null
			}
			{(state.showError&&error)
				?<Text style={stylesInput?.inputError||{}}>{attr.errorMessage}</Text>
				:null
			}
		</View>
	)
}
