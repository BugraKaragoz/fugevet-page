'use client';

import { useState } from 'react';

const AdminSettings = () => {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'FugeVet',
    siteDescription: 'Veteriner Klinik Yazılımı',
    supportEmail: 'destek@fugesoft.com',
    contactPhone: '+90 555 123 4567',
    maxUploadSize: 10,
    maintenanceMode: false
  });
  
  const [emailSettings, setEmailSettings] = useState({
    smtpServer: 'smtp.example.com',
    smtpPort: 587,
    smtpUser: 'notifications@fugesoft.com',
    smtpPassword: '••••••••••••',
    senderName: 'FugeVet Bildirim',
    senderEmail: 'notifications@fugesoft.com',
    enableSsl: true
  });
  
  const [interfaceSettings, setInterfaceSettings] = useState({
    primaryColor: '#3b82f6',
    accentColor: '#10b981',
    darkMode: 'auto',
    showSocialIcons: true,
    enableAnimations: true,
    itemsPerPage: 20
  });
  
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    browserNotifications: false,
    notifyOnNewUser: true,
    notifyOnError: true,
    dailySummary: true
  });
  
  // Handle general settings change
  const handleGeneralChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGeneralSettings({
      ...generalSettings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  // Handle email settings change
  const handleEmailChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmailSettings({
      ...emailSettings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  // Handle interface settings change
  const handleInterfaceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInterfaceSettings({
      ...interfaceSettings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  // Handle notification settings change
  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings({
      ...notificationSettings,
      [name]: checked
    });
  };
  
  // Handle save settings
  const handleSaveSettings = (e) => {
    e.preventDefault();
    // Simulating saving settings
    console.log('Saving general settings:', generalSettings);
    console.log('Saving email settings:', emailSettings);
    console.log('Saving interface settings:', interfaceSettings);
    console.log('Saving notification settings:', notificationSettings);
    
    alert('Ayarlar başarıyla kaydedildi!');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Sistem Ayarları</h2>
          <p className="text-gray-600">FugeVet sistem ayarlarını yapılandırın</p>
        </div>
        
        <button 
          onClick={handleSaveSettings}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Ayarları Kaydet
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Genel Ayarlar</h3>
          </div>
          <div className="p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">Site Adı</label>
                <input
                  type="text"
                  id="siteName"
                  name="siteName"
                  value={generalSettings.siteName}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">Site Açıklaması</label>
                <input
                  type="text"
                  id="siteDescription"
                  name="siteDescription"
                  value={generalSettings.siteDescription}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="supportEmail" className="block text-sm font-medium text-gray-700">Destek E-posta</label>
                <input
                  type="email"
                  id="supportEmail"
                  name="supportEmail"
                  value={generalSettings.supportEmail}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">İletişim Telefonu</label>
                <input
                  type="text"
                  id="contactPhone"
                  name="contactPhone"
                  value={generalSettings.contactPhone}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="maxUploadSize" className="block text-sm font-medium text-gray-700">Maksimum Yükleme Boyutu (MB)</label>
                <input
                  type="number"
                  id="maxUploadSize"
                  name="maxUploadSize"
                  value={generalSettings.maxUploadSize}
                  onChange={handleGeneralChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="maintenanceMode"
                  name="maintenanceMode"
                  checked={generalSettings.maintenanceMode}
                  onChange={handleGeneralChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-gray-700">
                  Bakım Modu (Aktifleştirildiğinde site ziyaretçilere kapalı olacak)
                </label>
              </div>
            </form>
          </div>
        </div>
        
        {/* Email Settings */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">E-posta Ayarları</h3>
          </div>
          <div className="p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="smtpServer" className="block text-sm font-medium text-gray-700">SMTP Sunucu</label>
                <input
                  type="text"
                  id="smtpServer"
                  name="smtpServer"
                  value={emailSettings.smtpServer}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="smtpPort" className="block text-sm font-medium text-gray-700">SMTP Port</label>
                <input
                  type="number"
                  id="smtpPort"
                  name="smtpPort"
                  value={emailSettings.smtpPort}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="smtpUser" className="block text-sm font-medium text-gray-700">SMTP Kullanıcı</label>
                <input
                  type="text"
                  id="smtpUser"
                  name="smtpUser"
                  value={emailSettings.smtpUser}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="smtpPassword" className="block text-sm font-medium text-gray-700">SMTP Şifre</label>
                <input
                  type="password"
                  id="smtpPassword"
                  name="smtpPassword"
                  value={emailSettings.smtpPassword}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="senderName" className="block text-sm font-medium text-gray-700">Gönderen Adı</label>
                <input
                  type="text"
                  id="senderName"
                  name="senderName"
                  value={emailSettings.senderName}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700">Gönderen E-posta</label>
                <input
                  type="email"
                  id="senderEmail"
                  name="senderEmail"
                  value={emailSettings.senderEmail}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="enableSsl"
                  name="enableSsl"
                  checked={emailSettings.enableSsl}
                  onChange={handleEmailChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="enableSsl" className="ml-2 block text-sm text-gray-700">
                  SSL/TLS Kullan
                </label>
              </div>
            </form>
          </div>
        </div>
        
        {/* Interface Settings */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Arayüz Ayarları</h3>
          </div>
          <div className="p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">Ana Renk</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="color"
                    id="primaryColor"
                    name="primaryColor"
                    value={interfaceSettings.primaryColor}
                    onChange={handleInterfaceChange}
                    className="h-10 w-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    value={interfaceSettings.primaryColor}
                    name="primaryColor"
                    onChange={handleInterfaceChange}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="accentColor" className="block text-sm font-medium text-gray-700">Vurgu Rengi</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="color"
                    id="accentColor"
                    name="accentColor"
                    value={interfaceSettings.accentColor}
                    onChange={handleInterfaceChange}
                    className="h-10 w-10 border border-gray-300 rounded-l-md"
                  />
                  <input
                    type="text"
                    value={interfaceSettings.accentColor}
                    name="accentColor"
                    onChange={handleInterfaceChange}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="darkMode" className="block text-sm font-medium text-gray-700">Karanlık Mod</label>
                <select
                  id="darkMode"
                  name="darkMode"
                  value={interfaceSettings.darkMode}
                  onChange={handleInterfaceChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
                >
                  <option value="auto">Otomatik (Sistem Tercihi)</option>
                  <option value="enabled">Her Zaman Açık</option>
                  <option value="disabled">Her Zaman Kapalı</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="itemsPerPage" className="block text-sm font-medium text-gray-700">Sayfa Başına Öğe Sayısı</label>
                <input
                  type="number"
                  id="itemsPerPage"
                  name="itemsPerPage"
                  value={interfaceSettings.itemsPerPage}
                  onChange={handleInterfaceChange}
                  min="5"
                  max="100"
                  step="5"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="showSocialIcons"
                  name="showSocialIcons"
                  checked={interfaceSettings.showSocialIcons}
                  onChange={handleInterfaceChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="showSocialIcons" className="ml-2 block text-sm text-gray-700">
                  Sosyal Medya İkonlarını Göster
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="enableAnimations"
                  name="enableAnimations"
                  checked={interfaceSettings.enableAnimations}
                  onChange={handleInterfaceChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="enableAnimations" className="ml-2 block text-sm text-gray-700">
                  Animasyonları Etkinleştir
                </label>
              </div>
            </form>
          </div>
        </div>
        
        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Bildirim Ayarları</h3>
          </div>
          <div className="p-6">
            <form className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emailNotifications"
                  name="emailNotifications"
                  checked={notificationSettings.emailNotifications}
                  onChange={handleNotificationChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-700">
                  E-posta Bildirimleri
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="smsNotifications"
                  name="smsNotifications"
                  checked={notificationSettings.smsNotifications}
                  onChange={handleNotificationChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="smsNotifications" className="ml-2 block text-sm text-gray-700">
                  SMS Bildirimleri
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="browserNotifications"
                  name="browserNotifications"
                  checked={notificationSettings.browserNotifications}
                  onChange={handleNotificationChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="browserNotifications" className="ml-2 block text-sm text-gray-700">
                  Tarayıcı Bildirimleri
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifyOnNewUser"
                  name="notifyOnNewUser"
                  checked={notificationSettings.notifyOnNewUser}
                  onChange={handleNotificationChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="notifyOnNewUser" className="ml-2 block text-sm text-gray-700">
                  Yeni Kullanıcı Kaydında Bildirim
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifyOnError"
                  name="notifyOnError"
                  checked={notificationSettings.notifyOnError}
                  onChange={handleNotificationChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="notifyOnError" className="ml-2 block text-sm text-gray-700">
                  Sistem Hata Bildirimleri
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="dailySummary"
                  name="dailySummary"
                  checked={notificationSettings.dailySummary}
                  onChange={handleNotificationChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="dailySummary" className="ml-2 block text-sm text-gray-700">
                  Günlük Özet Raporu
                </label>
              </div>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Test E-postası Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings; 