export interface ApiComponent {
  title: string;
  name: string;
  inputType: 'text' | 'checkbox' | 'none';
  onClick: any;
  defaultInput?: string;
  defaultCheckboxState?: boolean;
  label?: string;
  options: string[];
}

const apiComponents: ApiComponent[] = [
  {
    title: 'App Install Dialog API',
    name: 'appInstallDialog',
    options: ['OpenAppInstallDialog', 'CheckAppInstallCapability'],
    defaultInput: JSON.stringify({
      appId: '957f8a7e-fbcd-411d-b69f-acb7eb58b515',
    }),
    inputType: 'text',
    onClick: () => console.log('App Install Dialog API called'),
  },
  {
    title: 'Bar Code API',
    name: 'barCode',
    options: ['checkBarCodeCapability', 'scanBarCode', 'hasBarCodePermission', 'requestBarCodePermission'],
    defaultInput: '{}',
    inputType: 'text',
    onClick: () => console.log('Barcode API called'),
  },
  {
    title: 'Calendar API',
    name: 'calendar',
    options: ['CheckCalendarCapability', 'ComposeMeeting', 'OpenCalendarItem'],
    defaultInput: JSON.stringify({
      attendees: ['attendees'],
      startTime: 'startTime',
      endTime: 'endTime',
      subject: 'subject',
      content: 'content',
    }),
    inputType: 'text',
    onClick: () => console.log('Calendar API called'),
  },
  {
    title: 'Call API',
    name: 'call',
    options: ['CheckCallCapability', 'StartCall'],
    defaultInput: JSON.stringify({
      targets: ['user1', 'user2'],
      requestedModalities: ['video'],
      source: 'source',
    }),
    inputType: 'text',
    onClick: () => console.log('Call API called'),
  },
  {
    title: 'Chat API',
    name: 'chat',
    options: ['CheckChatCapability', 'OpenChat', 'OpenGroupChat', 'OpenConversation', 'CloseConversation', 'GetChatMembers'],
    defaultInput: JSON.stringify({
      user: 'testUpn',
      message: 'testMessage',
    }),
    inputType: 'text',
    onClick: () => console.log('Chat API called'),
  },
  {
    title: 'Dialog API',
    name: 'dialog',
    options: ['CheckDialogCapability'],
    inputType: 'none',
    onClick: () => console.log('Dialog API called'),
  },
  // Add more API components as needed
];

export default apiComponents;
