define({"oj-message":{fatal:"Schwerwiegender Fehler",error:"Fehler",warning:"Warnung",info:"Info",confirmation:"Bestätigung","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"Der Wert besitzt nicht das erwartete Format.",detail:"Geben Sie einen Wert im erwarteten Format ein.","plural-separator":", ",hint:{summary:"Beispiel: {exampleValue}",detail:'Geben Sie einen Wert im gleichen Format ein wie in diesem Beispiel: "{exampleValue}"',"detail-plural":'Geben Sie einen Wert im gleichen Format ein wie in diesen Beispielen: "{exampleValue}"'},
optionHint:{detail:'Ein akzeptierter Wert für Option "{propertyName}" lautet "{propertyValueValid}".',"detail-plural":'Akzeptierte Werte für Option "{propertyName}" lauten "{propertyValueValid}".'},optionTypesMismatch:{summary:'Für die Option "{requiredPropertyName}" muss ein Wert angegeben werden, wenn für die Option "{propertyName}" der Wert "{propertyValue}" festgelegt wurde.'},optionTypeInvalid:{summary:'Für Option "{propertyName}" wurde kein Wert des erwarteten Typs angegeben.'},optionOutOfRange:{summary:'Wert {propertyValue} für die Option "{propertyName}" befindet sich außerhalb des zulässigen Bereichs.'},
optionValueInvalid:{summary:'Für die Option "{propertyName}" wurde der ungültige Wert "{propertyValue}" angegeben.'},number:{decimalFormatMismatch:{summary:'"{value}" besitzt nicht das erwartete Zahlenformat.'},decimalFormatUnsupportedParse:{summary:'decimalFormat: "short" und "long" werden beim Parsen des Konverters nicht unterstützt.',detail:"Ändern Sie die Komponente in readOnly. readOnly-Felder rufen die Parsefunktion des Konverters nicht auf."},currencyFormatMismatch:{summary:'"{value}" besitzt nicht das erwartete Währungsformat.'},
percentFormatMismatch:{summary:'"{value}" besitzt nicht das erwartete Prozentformat.'}},datetime:{datetimeOutOfRange:{summary:'Wert "{value}" für "{propertyName}" befindet sich außerhalb des zulässigen Bereichs.',detail:'Geben Sie einen Wert zwischen "{minValue}" und "{maxValue}" ein.'},dateFormatMismatch:{summary:'"{value}" besitzt nicht das erwartete Datumsformat.'},invalidTimeZoneID:{summary:"Ungültige Zeitzonen-ID {timeZoneID} angegeben."},nonExistingTime:{summary:"Die Eingabezeit ist nicht vorhanden, da sie in den Übergang auf Sommerzeit fällt."},
missingTimeZoneData:{summary:'TimeZone-Daten fehlen. Rufen Sie den erforderlichen Parameter "\'ojs/ojtimezonedata" auf, um die TimeZone-Daten zu laden.'},timeFormatMismatch:{summary:'"{value}" besitzt nicht das erwartete Uhrzeitformat.'},datetimeFormatMismatch:{summary:'"{value}" besitzt nicht das erwartete Datums- und Uhrzeitformat.'},dateToWeekdayMismatch:{summary:'Der Tag "{date}" ist kein "{weekday}".',detail:"Geben Sie den Wochentag ein, der dem Datum entspricht."}}},"oj-validator":{length:{hint:{min:"Geben Sie {min} oder mehr Zeichen ein.",
max:"Geben Sie {max} oder weniger Zeichen ein",inRange:"Geben Sie {min} oder mehr, bis maximal {max} Zeichen ein.",exact:"Geben Sie {length} Zeichen ein."},messageDetail:{tooShort:"Geben Sie {min} oder mehr Zeichen ein, nicht weniger.",tooLong:"Geben Sie {max} oder weniger Zeichen ein, nicht mehr."},messageSummary:{tooShort:"Zu wenige Zeichen.",tooLong:"Zu viele Zeichen."}},range:{number:{hint:{min:"Geben Sie eine Zahl ein, die größer oder gleich {min} ist.",max:"Geben Sie eine Zahl ein, die kleiner oder gleich {max} ist.",
inRange:"Geben Sie eine Zahl zwischen {min} und {max} ein."},messageDetail:{rangeUnderflow:"Die Zahl muss größer oder gleich {min} sein.",rangeOverflow:"Die Zahl muss kleiner als oder gleich {max} sein."},messageSummary:{rangeUnderflow:"Die Zahl ist zu niedrig.",rangeOverflow:"Die Zahl ist zu hoch."}},datetime:{hint:{min:"Geben Sie Datum und Uhrzeit ein, die {min} oder später entsprechen.",max:"Geben Sie Datum und Uhrzeit ein, die {max} oder früher entsprechen.",inRange:"Geben Sie Datum und Uhrzeit zwischen {min} und {max} ein."},
messageDetail:{rangeUnderflow:"Datum und Uhrzeit müssen {min} oder später sein.",rangeOverflow:"Datum und Uhrzeit müssen {max} oder früher sein."},messageSummary:{rangeUnderflow:"Datum und Uhrzeit liegen vor dem frühesten Datum.",rangeOverflow:"Datum und Uhrzeit liegen nach dem spätesten Datum."}}},restriction:{date:{messageSummary:"Das Datum {value} bezieht sich auf einen deaktivierten Eintrag.",messageDetail:"Das Datum {value} darf sich nicht auf einen deaktivierten Eintrag beziehen."}},regExp:{summary:"Format ist falsch.",
detail:'Wert "{value}" muss mit diesem Muster übereinstimmen: "{pattern}"'},required:{summary:"Wert ist erforderlich.",detail:"Sie müssen einen Wert eingeben."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"Voriger",nextText:"Nächster",currentText:"Heute",weekHeader:"KW",tooltipCalendar:"Datum auswählen",tooltipCalendarDisabled:"Datumsauswahl deaktiviert",weekText:"Woche",datePicker:"Datumsauswahl",inputHelp:"Drücken Sie die NACH-UNTEN- bzw. NACH-OBEN-TASTE, um auf den Kalender zuzugreifen",
inputHelpBoth:"Drücken Sie die NACH-UNTEN- bzw. NACH-OBEN-TASTE, um auf den Kalender zuzugreifen, und UMSCHALT+NACH-UNTEN bzw. UMSCHALT+NACH-OBEN, um auf das Dropdown-Menü für die Uhrzeit zuzugreifen",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"Uhrzeit auswählen",tooltipTimeDisabled:"Uhrzeitauswahl deaktiviert",
inputHelp:"Drücken Sie die NACH-UNTEN- bzw. NACH-OBEN-TASTE, um auf das Dropdown-Menü für die Uhrzeit zuzugreifen",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"Wert muss mit diesem Muster übereinstimmen: '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"Nächste Seite",labelAccArrowPreviousPage:"Vorherige Seite",
tipArrowNextPage:"Weiter",tipArrowPreviousPage:"Zurück"},"oj-ojDataGrid":{accessibleSortAscending:"{id} aufsteigend sortiert",accessibleSortDescending:"{id} absteigend sortiert",accessibleActionableMode:"Aktionsmodus aufrufen",accessibleNavigationMode:"Rufen Sie den Navigationsmodus auf, drücken Sie F2, um den Bearbeitungs- oder ausführbaren Modus aufzurufen",accessibleEditableMode:"Rufen Sie den Bearbeitungsmodus auf, drücken Sie die ESC-Taste, um außerhalb des Datenrasters zu navigieren",accessibleSummaryExact:"Dies ist ein Datenraster mit {rownum} Zeilen und {colnum} Spalten",
accessibleSummaryEstimate:"Dies ist ein Datenraster mit einer unbekannten Anzahl Zeilen und Spalten",accessibleSummaryExpanded:"Es sind derzeit {num} Zeilen eingeblendet",accessibleRowExpanded:"Zeile eingeblendet",accessibleRowCollapsed:"Zeile ausgeblendet",accessibleRowSelected:"Zeile {row} wurde ausgewählt",accessibleColumnSelected:"Spalte {column} wurde ausgewählt",accessibleStateSelected:"gewählt",accessibleMultiCellSelected:"{num} Zellen gewählt",accessibleRowContext:"Zeile {index}",accessibleColumnContext:"Spalte {index}",
accessibleRowHeaderContext:"Zeilenheader {index}",accessibleColumnHeaderContext:"Spaltenheader {index}",accessibleRowEndHeaderContext:"Zeilenendheader {index}",accessibleColumnEndHeaderContext:"Spaltenendheader {index}",accessibleLevelContext:"Ebene {level}",accessibleRangeSelectModeOn:"Modus für das Hinzufügen des ausgewählten Zellenbereichs aktiviert",accessibleRangeSelectModeOff:"Modus für das Hinzufügen des ausgewählten Zellenbereichs deaktiviert",accessibleFirstRow:"Sie haben die erste Zeile erreicht",
accessibleLastRow:"Sie haben die letzte Zeile erreicht",accessibleFirstColumn:"Sie haben die erste Spalte erreicht",accessibleLastColumn:"Sie haben die letzte Spalte erreicht",accessibleSelectionAffordanceTop:"Oberes Auswahl-Handle",accessibleSelectionAffordanceBottom:"Unteres Auswahl-Handle",msgFetchingData:"Daten werden abgerufen...",msgNoData:"Keine anzuzeigenden Elemente.",labelResize:"Skalieren",labelResizeWidth:"Breite ändern",labelResizeHeight:"Höhe ändern",labelSortRow:"Zeile sortieren",labelSortRowAsc:"Zeile aufsteigend sortieren",
labelSortRowDsc:"Zeile absteigend sortieren",labelSortCol:"Spalte sortieren",labelSortColAsc:"Spalte aufsteigend sortieren",labelSortColDsc:"Spalte absteigend sortieren",labelCut:"Ausschneiden",labelPaste:"Einfügen",labelEnableNonContiguous:"Nicht fortlaufende Auswahl aktivieren",labelDisableNonContiguous:"Nicht fortlaufende Auswahl deaktivieren",labelResizeDialogSubmit:"OK"},"oj-ojRowExpander":{accessibleLevelDescription:"Ebene {level}",accessibleRowDescription:"Ebene {level}, Zeile {num} von {total}",
accessibleRowExpanded:"Zeile eingeblendet",accessibleRowCollapsed:"Zeile ausgeblendet",accessibleStateExpanded:"eingeblendet",accessibleStateCollapsed:"ausgeblendet"},"oj-ojListView":{msgFetchingData:"Daten werden abgerufen...",msgNoData:"Keine anzuzeigenden Elemente.",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"Doppeltippen und halten. Warten Sie auf den Ton, und ordnen Sie mit Ziehen anschließend neu an.",accessibleReorderBeforeItem:"Vor {item}",
accessibleReorderAfterItem:"Nach {item}",accessibleReorderInsideItem:"In {item}",labelCut:"Ausschneiden",labelCopy:"Kopieren",labelPaste:"Einfügen",labelPasteBefore:"Einfügen vor",labelPasteAfter:"Einfügen nach"},"oj-_ojLabel":{tooltipHelp:"Hilfe",tooltipRequired:"Erforderlich"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"Verringern",tooltipIncrement:"Erhöhen"},
"oj-ojTable":{labelAccSelectionAffordanceTop:"Oberes Auswahl-Handle",labelAccSelectionAffordanceBottom:"Unteres Auswahl-Handle",labelEnableNonContiguousSelection:"Nicht fortlaufende Auswahl aktivieren",labelDisableNonContiguousSelection:"Nicht fortlaufende Auswahl deaktivieren",labelSelectRow:"Zeile auswählen",labelEditRow:"Zeile bearbeiten",labelSelectAndEditRow:"Reihe auswählen und bearbeiten",labelSelectColumn:"Spalte auswählen",labelSort:"Sortieren",labelSortAsc:"Aufsteigend sortieren",labelSortDsc:"Absteigend sortieren",
msgFetchingData:"Daten werden abgerufen...",msgNoData:"Keine anzuzeigenden Daten."},"oj-ojTabs":{labelCut:"Ausschneiden",labelPasteBefore:"Einfügen vor",labelPasteAfter:"Einfügen nach",labelRemove:"Entfernen",labelReorder:"Neu anordnen",removeCueText:"Kann entfernt werden"},"oj-ojSelect":{searchField:"Suchfeld",noMatchesFound:"Keine Übereinstimmungen gefunden",oneMatchesFound:"Eine Übereinstimmung gefunden",moreMatchesFound:"{num} Übereinstimmungen gefunden"},"oj-ojSwitch":{SwitchON:"Ein",SwitchOFF:"Aus"},
"oj-ojCombobox":{noMatchesFound:"Keine Übereinstimmungen gefunden"},"oj-ojInputSearch":{noMatchesFound:"Keine Übereinstimmungen gefunden"},"oj-ojTree":{stateLoading:"Wird geladen...",labelNewNode:"Neuer Knoten",labelMultiSelection:"Mehrfachauswahl",labelEdit:"Bearbeiten",labelCreate:"Erstellen",labelCut:"Ausschneiden",labelCopy:"Kopieren",labelPaste:"Einfügen",labelRemove:"Entfernen",labelRename:"Umbenennen",labelNoData:"Keine Daten"},"oj-ojPagingControl":{labelAccPaging:"Seitenumbruch",labelAccNavFirstPage:"Erste Seite",
labelAccNavLastPage:"Letzte Seite",labelAccNavNextPage:"Nächste Seite",labelAccNavPreviousPage:"Vorherige Seite",labelAccNavPage:"Seite",labelLoadMore:"Weitere anzeigen...",labelLoadMoreMaxRows:"Die maximale Anzahl von {maxRows} Zeilen wurde erreicht",labelNavInputPage:"Seite",labelNavInputPageMax:"von {pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"von",msgItemRangeOfAtLeast:"von mindestens",msgItemRangeOfApprox:"von ca.",msgItemRangeItems:"Elementen",
tipNavInputPage:"Gehe zu Seite",tipNavPageLink:"Gehe zu Seite {pageNum}",tipNavNextPage:"Weiter",tipNavPreviousPage:"Zurück",tipNavFirstPage:"Erste",tipNavLastPage:"Letzte",pageInvalid:{summary:"Der eingegebene Seitenwert ist ungültig.",detail:"Geben Sie einen Wert größer als 0 ein."},maxPageLinksInvalid:{summary:"Wert für maxPageLinks ist ungültig.",detail:"Geben Sie einen Wert größer als 4 ein."}},"oj-ojMasonryLayout":{labelCut:"Ausschneiden",labelPasteBefore:"Einfügen vor",labelPasteAfter:"Einfügen nach"},
"oj-panel":{labelAccButtonExpand:"Einblenden",labelAccButtonCollapse:"Ausblenden",labelAccButtonRemove:"Entfernen"},"oj-ojChart":{labelDefaultGroupName:"Gruppe {0}",labelSeries:"Serie",labelGroup:"Gruppe",labelDate:"Datum",labelValue:"Wert",labelTargetValue:"Ziel",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"Prozentsatz",labelLow:"Niedrig",labelHigh:"Hoch",labelOpen:"Öffnen",labelClose:"Schließen",labelVolume:"Volumen",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"Min.",labelMax:"Max.",labelOther:"Weitere",
tooltipPan:"Schwenken",tooltipSelect:"Auswahl in Laufschrift",tooltipZoom:"Laufschriftzoom",componentName:"Diagramm"},"oj-dvtBaseGauge":{componentName:"Gauge"},"oj-ojDiagram":{promotedLink:"{0} Link",promotedLinks:"{0} Links",promotedLinkAriaDesc:"Indirekt",componentName:"Diagramm"},"oj-ojGantt":{componentName:"Gantt",accessibleDurationDays:"{0} Tage",accessibleDurationHours:"{0} Stunden",accessibleTaskInfo:"Startzeit ist {0}, Endzeit ist {1}, Dauer ist {2}",accessibleMilestoneInfo:"Zeit ist {0}",
accessibleRowInfo:"Zeile {0}"},"oj-ojLegend":{componentName:"Legende"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"Weitere",labelGroup:"Gruppe",labelSize:"Größe",labelAdditionalData:"Zusätzliche Daten",componentName:"N-Felder-Matrix"},"oj-ojPictoChart":{componentName:"Bilddiagramm"},"oj-ojSparkChart":{componentName:"Diagramm"},"oj-ojSunburst":{labelColor:"Farbe",labelSize:"Größe",componentName:"Sunburst"},"oj-ojTagCloud":{componentName:"Tagcloud"},"oj-ojThematicMap":{componentName:"Thematische Karte"},
"oj-ojTimeAxis":{componentName:"Zeitachse"},"oj-ojTimeline":{componentName:"Timeline",labelSeries:"Serie",tooltipZoomIn:"Vergrößern",tooltipZoomOut:"Verkleinern"},"oj-ojTreemap":{labelColor:"Farbe",labelSize:"Größe",tooltipIsolate:"Isolieren",tooltipRestore:"Wiederherstellen",componentName:"Treemap"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"Ungültige Daten",
labelNoData:"Keine anzuzeigenden Daten",labelClearSelection:"Auswahl löschen",labelDataVisualization:"Datenvisualisierung",stateSelected:"Gewählt",stateUnselected:"Auswahl aufgehoben",stateMaximized:"Maximiert",stateMinimized:"Minimiert",stateExpanded:"Eingeblendet",stateCollapsed:"Ausgeblendet",stateIsolated:"Isoliert",stateHidden:"Ausgeblendet",stateVisible:"Sichtbar",stateDrillable:"Kann aufgegliedert werden",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} von {1}"},"oj-ojNavigationList":{defaultRootLabel:"Navigationsliste",
hierMenuBtnLabel:'Schaltfläche "Hierarchisches Menü"',selectedLabel:"gewählt",previousIcon:"Zurück",msgFetchingData:"Daten werden abgerufen...",msgNoData:"Keine anzuzeigenden Elemente."},"oj-ojSlider":{noValue:"ojSlider hat keinen Wert",maxMin:"Max. darf nicht kleiner als Min. sein",valueRange:"Wert muss zwischen Min. und Max. liegen",optionNum:"Option {option} ist keine Zahl",invalidStep:"Ungültiger Schritt. Schritt muss > 0 sein"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"Popup wird aufgerufen. Drücken Sie F6, um zwischen dem Popup und dem zugehörigen Steuerelement zu navigieren.",
ariaLiveRegionInitialFocusNone:"Popup geöffnet. Drücken Sie F6, um zwischen dem Popup und dem zugehörigen Steuerelement zu navigieren.",ariaLiveRegionInitialFocusFirstFocusableTouch:"Popup wird aufgerufen. Popup kann geschlossen werden, indem zu dem letzten Link in dem Popup navigiert wird.",ariaLiveRegionInitialFocusNoneTouch:"Popup geöffnet. Navigieren Sie zu dem nächsten Link, um den Fokus innerhalb des Popups festzulegen.",ariaFocusSkipLink:"Doppeltippen Sie, um zu dem geöffneten Popup zu navigieren.",
ariaCloseSkipLink:"Doppeltippen Sie, um das geöffnete Popup zu schließen."},"oj-pullToRefresh":{ariaRefreshLink:"Link aktivieren, um Inhalt zu aktualisieren",ariaRefreshingLink:"Inhalt wird aktualisiert",ariaRefreshCompleteLink:"Aktualisierung abgeschlossen"},"oj-ojIndexer":{indexerOthers:"#",ariaDisabledLabel:"Kein übereinstimmender Gruppenheader",ariaOthersLabel:"Zahl",ariaInBetweenText:"Zwischen {first} und {second}",ariaKeyboardInstructionText:"Drücken Sie die Eingabetaste, um einen Wert zu wählen.",
ariaTouchInstructionText:"Doppeltippen und halten, um den Gestenmodus aufzurufen, und anschließend nach oben oder unten ziehen, um den Wert anzupassen."},"oj-ojMenu":{labelCancel:"Abbrechen"}});