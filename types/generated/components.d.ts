import type { Schema, Struct } from '@strapi/strapi';

export interface DossierAbsence extends Struct.ComponentSchema {
  collectionName: 'components_dossier_absences';
  info: {
    description: '';
    displayName: 'absence';
    icon: 'thumbDown';
  };
  attributes: {
    date: Schema.Attribute.Date;
    isAbsent: Schema.Attribute.Boolean;
  };
}

export interface DossierDiplom extends Struct.ComponentSchema {
  collectionName: 'components_dossier_diploms';
  info: {
    description: '';
    displayName: 'diplom';
    icon: 'envelop';
  };
  attributes: {
    delivery_date: Schema.Attribute.Date;
    diplom_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    diplom_name: Schema.Attribute.String;
    obtention_date: Schema.Attribute.Date;
  };
}

export interface DossierDisponibilityProf extends Struct.ComponentSchema {
  collectionName: 'components_dossier_disponibility_profs';
  info: {
    displayName: 'disponibility.prof';
    icon: 'chartBubble';
  };
  attributes: {
    enddate: Schema.Attribute.Date;
    startdate: Schema.Attribute.Date;
  };
}

export interface DossierEmploiDuTemps extends Struct.ComponentSchema {
  collectionName: 'components_dossier_emploi_du_temps';
  info: {
    description: '';
    displayName: 'emploi-du-temps';
    icon: 'apps';
  };
  attributes: {
    class_room: Schema.Attribute.Relation<
      'oneToOne',
      'api::class-room.class-room'
    >;
    debut: Schema.Attribute.Time;
    fin: Schema.Attribute.Time;
    prof: Schema.Attribute.Relation<'oneToOne', 'api::prof.prof'>;
  };
}

export interface DossierExam extends Struct.ComponentSchema {
  collectionName: 'components_dossier_exams';
  info: {
    displayName: 'exam';
  };
  attributes: {
    emploi_du_temps: Schema.Attribute.Component<
      'dossier.emploi-du-temps',
      true
    >;
    end_date: Schema.Attribute.Date;
    session: Schema.Attribute.String;
    start_date: Schema.Attribute.Date;
    subjects: Schema.Attribute.Relation<'oneToMany', 'api::subject.subject'>;
  };
}

export interface DossierFournitureUse extends Struct.ComponentSchema {
  collectionName: 'components_dossier_fourniture_uses';
  info: {
    description: '';
    displayName: 'fourniture_use';
  };
  attributes: {
    date_of_take: Schema.Attribute.DateTime;
    fournitures: Schema.Attribute.Relation<
      'oneToMany',
      'api::fourniture.fourniture'
    >;
    number_taken: Schema.Attribute.Integer;
    observation: Schema.Attribute.String;
    student: Schema.Attribute.Relation<'oneToOne', 'api::student.student'>;
  };
}

export interface DossierMoyenne extends Struct.ComponentSchema {
  collectionName: 'components_dossier_moyennes';
  info: {
    displayName: 'moyenne';
  };
  attributes: {
    average: Schema.Attribute.Decimal;
    observation: Schema.Attribute.String;
    session: Schema.Attribute.Date;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dossier.absence': DossierAbsence;
      'dossier.diplom': DossierDiplom;
      'dossier.disponibility-prof': DossierDisponibilityProf;
      'dossier.emploi-du-temps': DossierEmploiDuTemps;
      'dossier.exam': DossierExam;
      'dossier.fourniture-use': DossierFournitureUse;
      'dossier.moyenne': DossierMoyenne;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
