function generate_sample(datadir,src,ref){ 
    return {
        'src':`${datadir}/ref_${ref}/src_${src}/src_${src}.wav`,
        'ref':`${datadir}/ref_${ref}/src_${src}/ref_${ref}.wav`,
        'SEF_VC':`${datadir}/ref_${ref}/src_${src}/hubert_main_${src}.wav`,
        'SSR_VC':`${datadir}/ref_${ref}/src_${src}/polyak_${src}.wav`,
        'YourTTS':`${datadir}/ref_${ref}/src_${src}/yourtts_${src}.wav`,
        'AdaIN_VC':`${datadir}/ref_${ref}/src_${src}/adain_${src}.wav`
    }
}

function load_sample(){
    let src_node = document.getElementById("src");
    let ref_node = document.getElementById("ref");
    let SEF_VC_node = document.getElementById("SEF_VC");
    let SSR_VC_node = document.getElementById("SSR_VC");
    let YourTTS_node = document.getElementById("YourTTS");
    let AdaIN_VC_node = document.getElementById("AdaIN_VC");

    let caption_node = document.getElementById('caption')

    let src_to_ref_keys = ['MaletoFemale','MaletoMale','FemaletoMale','FemaletoFemale']
    let src_to_ref = {
        'MaletoFemale':{
            'src':'1089_134686_000024_000002',
            'ref':'237_134493_000015_000004',
            'transcript':'If a layman in giving baptism pour the water before saying the words is the child baptized?'
        },
        'MaletoMale':{
            'src':'5105_28233_000014_000000',
            'ref':'2300_131720_000016_000004',
            'transcript':'And through a storm of shot, not one of which touched the prostrate officer, the troop passed in safety.'
        },
        'FemaletoMale':{
            'src':'5142_33396_000053_000000',
            'ref':'4077_13754_000013_000005',
            'transcript':'Well, after we had been there for a long time, Hakon came in to the feast one night and said'
        },
        'FemaletoFemale':{
            'src':'3570_5695_000001_000001',
            'ref':'1580_141083_000019_000001',
            'transcript':'It is a fact of common observance that in this lower middle class there is no pretense of leisure on the part of the head of the household.'
        }
    }

    for(let i=0;i<src_to_ref_keys.length;++i){
        key = src_to_ref_keys[i];
        let sample = generate_sample('all_results',src_to_ref[key]['src'],src_to_ref[key]['ref']);
        let caption = document.createElement('div')
        caption.textContent = src_to_ref[key]['transcript']
        caption.className = 'row caption'
        caption_node.appendChild(caption)

        let tmp = document.createElement('audio');
        tmp.controls = true;
        tmp.src = sample['src'];
        tmp.className = 'audio row';
        src_node.appendChild(tmp)

        tmp = document.createElement('audio');
        tmp.controls =true;
        tmp.src = sample['ref'];
        tmp.className = 'audio row';
        ref_node.appendChild(tmp);

        tmp = document.createElement('audio');
        tmp.controls =true;
        tmp.src = sample['SEF_VC'];
        tmp.className = 'audio row';
        SEF_VC_node.appendChild(tmp);

        tmp = document.createElement('audio');
        tmp.controls =true;
        tmp.src = sample['SSR_VC'];
        tmp.className = 'audio row';
        SSR_VC_node.appendChild(tmp);

        tmp = document.createElement('audio');
        tmp.controls =true;
        tmp.src = sample['YourTTS'];
        tmp.className = 'audio row';
        YourTTS_node.appendChild(tmp);

        tmp = document.createElement('audio');
        tmp.controls =true;
        tmp.src = sample['AdaIN_VC'];
        tmp.className = 'audio row';
        AdaIN_VC_node.appendChild(tmp);
    }
}

window.onload = load_sample;