﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Должности.
    /// </summary>
    // *** Start programmer edit section *** (Должности CustomAttributes)

    // *** End programmer edit section *** (Должности CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДолжностиE", new string[] {
            "КодДолж as \'Код долж\'",
            "Наимен as \'Наименов\'"})]
    [View("ДолжностиL", new string[] {
            "КодДолж as \'Код долж\'",
            "Наимен as \'Наименов\'"})]
    public class Должности : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодДолж;
        
        private string fНаимен;
        
        // *** Start programmer edit section *** (Должности CustomMembers)

        // *** End programmer edit section *** (Должности CustomMembers)

        
        /// <summary>
        /// КодДолж.
        /// </summary>
        // *** Start programmer edit section *** (Должности.КодДолж CustomAttributes)

        // *** End programmer edit section *** (Должности.КодДолж CustomAttributes)
        public virtual int КодДолж
        {
            get
            {
                // *** Start programmer edit section *** (Должности.КодДолж Get start)

                // *** End programmer edit section *** (Должности.КодДолж Get start)
                int result = this.fКодДолж;
                // *** Start programmer edit section *** (Должности.КодДолж Get end)

                // *** End programmer edit section *** (Должности.КодДолж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должности.КодДолж Set start)

                // *** End programmer edit section *** (Должности.КодДолж Set start)
                this.fКодДолж = value;
                // *** Start programmer edit section *** (Должности.КодДолж Set end)

                // *** End programmer edit section *** (Должности.КодДолж Set end)
            }
        }
        
        /// <summary>
        /// Наимен.
        /// </summary>
        // *** Start programmer edit section *** (Должности.Наимен CustomAttributes)

        // *** End programmer edit section *** (Должности.Наимен CustomAttributes)
        [StrLen(255)]
        public virtual string Наимен
        {
            get
            {
                // *** Start programmer edit section *** (Должности.Наимен Get start)

                // *** End programmer edit section *** (Должности.Наимен Get start)
                string result = this.fНаимен;
                // *** Start programmer edit section *** (Должности.Наимен Get end)

                // *** End programmer edit section *** (Должности.Наимен Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должности.Наимен Set start)

                // *** End programmer edit section *** (Должности.Наимен Set start)
                this.fНаимен = value;
                // *** Start programmer edit section *** (Должности.Наимен Set end)

                // *** End programmer edit section *** (Должности.Наимен Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДолжностиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностиE", typeof(IIS.Test.Должности));
                }
            }
            
            /// <summary>
            /// "ДолжностиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностиL", typeof(IIS.Test.Должности));
                }
            }
        }
    }
}
