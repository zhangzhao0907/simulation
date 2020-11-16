const input=[
    {title:'Age',key:'age',chn:'年龄'},
    {title:'Gender',key:'gender',chn:'性别'},
    {title:'Wound Location',key:'wound_location',chn:'伤疤位置'},
    {title:'BMI',key:'bmi' ,chn:' '},
    {title:'Weight',key:'weight' ,chn:'体重'},
    {title:'Wound Width',key:'wound_width' ,chn:'伤疤宽度'},
    
    {title:'Wound Depth',key:'wound_depth' ,chn:'伤疤深度'},
    {title:'Skin Tension',key:'skin_tension' ,chn:'皮肤张力'},
    {title:'TGF-β Concentration',key:'tgf_b' ,chn:''},
    {title:'TNF-ɑ Concentration',key:'tnf_a' ,chn:''},
    {title:'Inflammatory Cytokine',key:'inflammatory_cytokine' ,chn:''},
    {title:'Inflammatory Cell',key:'inflammatory_cell' ,chn:''},
    
    {title:'Macrophages',key:'macrophages_concentraion' ,chn:''},
    {title:'Wound Healing Time',key:'wound_healing_time' ,chn:'治疗时间'},
    {title:'Wound Infected',key:'wound_infected' ,chn:'伤口感染'},
    {title:'Epidermal Laser Density',key:'epidermal_laser_density' ,chn:''},
    {title:'Dermal Laser Density',key:'dermal_laser_density' ,chn:''},
    {title:'Laser Diameter',key:'laser_diameter' ,chn:''},

    {title:'Laser Cross Section Shape',key:'' ,chn:'laser_cross'},
    {title:'Laser Inclination Angle',key:'laser_inclination_angle' ,chn:''},
    {title:'Duration Between Laser Treatment',key:'duration' ,chn:''},
    {title:'Betamethason Dosage',key:'betamethason_dosage' ,chn:''},
    {title:'Pressure',key:'pressure' ,chn:''},
    {title:'Tension Reduction',key:'tension_reduction' ,chn:''},

    {title:'Botulinum Toxin Type A Dosage',key:'botulinum_toxin' ,chn:''},
    {title:'TGF-β1 Antibody Dosage',key:'tgf_b1_antibody' ,chn:''},
    {title:'Avastin Dosage',key:'avastin_dosage' ,chn:''},
    {title:'Inhibitor Dosage',key:'inhibitor_dosage' ,chn:''},
];

const output=[
    {title:'Epidermal Thickness',key:'epidermal_thickness',chn:''},
    {title:'Scar Thickness',key:'scar_thickness',chn:''},
    {title:'Scar Width',key:'scar_width',chn:''},
    {title:'Vessel Density',key:'vessel_density' ,chn:''},
    {title:'Type III Collagen Density',key:'type3_collagen_density' ,chn:''},
    {title:'Type I Collagen Density',key:'type1_collagen_density' ,chn:''},
    
    {title:'Color',key:'color',chn:''},
    {title:'Smoothness',key:'smoothness',chn:''},
    {title:'Tenderness',key:'tenderness',chn:''},
    {title:'Itchy Intensity',key:'itchy_intensity',chn:''},
    {title:'Painness',key:'painness',chn:''},
    {title:'Nerve Ending Density',key:'nerve_ending_density',chn:''},
    
    {title:'TGF-β Concentration',key:'tgf_b_concentration',chn:''},
    {title:'TNF-ɑ Concentration',key:'tnf_a_concentration',chn:''},
    {title:'Inflammatory Cytokine',key:'inflammatory_cytokine',chn:''},
    {title:'Inflamatory Cell Concentration',key:'inflamatory_cell',chn:''},
    {title:'Macrophages Concentraion',key:'macrophages_concentraion',chn:''},
]

export {input,output};