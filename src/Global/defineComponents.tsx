import ImageComp from "@/components/Image/Image";
import Paragraph from "@/components/Paragraph/Paragraph";
import Sumary from "@/components/Sumary/Sumary";
import Title from "@/components/Title/Title";
import Kicker from "@/components/kicker/kicker";

function defineComponents(props: any){
    const listComponents:Array<any> = []
    props?.json?.Contents[0]?.ContentSet?.InLine.forEach((element:any) => {

        switch (element.type) {
            case 'title':
                listComponents.push(<Title key={element.data.text} title={element.data.text} />)    
                break;
            case 'kicker':
                listComponents.push(<Kicker key={element.data.text} text={element.data.text} />)    
                break
            case 'summary':
                listComponents.push(<Sumary key={element.data.text} text={element.data.text} />)    
                break
            case 'image':
                listComponents.push(<ImageComp key={element.data} data={element.data} />)    
                break
            case 'paragraph':
                listComponents.push(<Paragraph key={element.data.value} text={element.data.value} />)    
                break
            default:
                break;
        }
    });

    return listComponents
}


export {defineComponents}