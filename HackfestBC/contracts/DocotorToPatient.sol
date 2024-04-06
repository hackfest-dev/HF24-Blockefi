// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract DocotorToPatient{
    address public doctor;

    uint i=1;
    struct Patient{
        uint patientid;
         string name;
         uint age;
        

    }
    constructor(){
        doctor=msg.sender;
    }

    struct PatientRecord{
        uint patientid;
        uint age;
        string name;
        string date;
        string testReportStatus;
        string Prescribtions;
        bool verified;
    }


        struct NotVerifiedarray{
            uint repono;
        uint patientid;
        uint age;
        string name;
        string date;
        string testReportStatus;
        bool verified;
    }

    uint labreportno=1;
NotVerifiedarray[] public notVeriifed;
   function NotVerifiedStored( uint patientid,
        uint age,
        string memory name,
        string memory date,
        string memory testReportStatus
     ) public {
         
            notVeriifed.push(NotVerifiedarray(labreportno,patientid,age,name,date,testReportStatus,false));
            labreportno++;

        }



PatientRecord[] public patientRecord;

Patient[] public patients;
 mapping(address=>bool)rigistered;
    mapping(address=>uint)PatientUniqId;
    function addPatient(string memory name, uint age) public{
        patients.push(Patient(i,name,age));
        PatientUniqId[msg.sender]=i;
        i=i+1;
    rigistered[msg.sender]=true;

    }

    function addRecords( uint patientid,
        uint age,
        string memory name,
        string memory date,
        string memory testReportStatus,
        string memory Prescribtions) public {
            require(msg.sender==doctor,"only doctor can add patients record");
            patientRecord.push(PatientRecord(patientid,age,name,date,testReportStatus,Prescribtions,true));

        }

        function getpatientRecord(uint PatientId)public view returns(PatientRecord[] memory){
            
             uint counter=0;
             for(uint j=0;j<patientRecord.length;j++)
             {
                if(patientRecord[j].patientid==PatientId)
                {
                    counter++;
                }
             }

              PatientRecord[] memory internalPateintRecord=new PatientRecord[](counter);
               for(uint j=0;j<patientRecord.length;j++)
             {
                uint k=0;
                if(patientRecord[j].patientid==PatientId)
                {
                    internalPateintRecord[k]=PatientRecord(patientRecord[j].patientid,patientRecord[j].age,patientRecord[j].name,patientRecord[j].date,patientRecord[j].testReportStatus,patientRecord[j].Prescribtions,patientRecord[j].verified);
                    k++;
                }
             }
             return internalPateintRecord;

        }

        function toVerify(uint labReportNo,string memory presc)public{
            require(msg.sender==doctor,"only docotor can verify");

            for(uint z=0;z<notVeriifed.length;z++)
            {
                if(notVeriifed[z].repono==labReportNo)
                {
                    notVeriifed[z].verified=true;
                    addRecords(notVeriifed[z].patientid,notVeriifed[z].age,notVeriifed[z].name,notVeriifed[z].date,notVeriifed[z].testReportStatus,presc);
                }

            }

        }

    function getPatients() public view returns(Patient[] memory){
        return patients;
    }

         function labTestedNotVerifiedRecords()public view returns(NotVerifiedarray[] memory){
            
             uint counter=0;
             for(uint j=0;j<notVeriifed.length;j++)
             {
                if(notVeriifed[j].verified==false)
                {
                    counter++;
                }
             }

              NotVerifiedarray[] memory internalnotVeriifed=new NotVerifiedarray[](counter);
               for(uint j=0;j<notVeriifed.length;j++)
             {
                uint k=0;
                if(notVeriifed[j].verified==false)
                {
                    internalnotVeriifed[k]=NotVerifiedarray(notVeriifed[j].repono,notVeriifed[j].patientid,notVeriifed[j].age,notVeriifed[j].name,notVeriifed[j].date,notVeriifed[j].testReportStatus,notVeriifed[j].verified);
                    k++;

                }
             }
             return internalnotVeriifed;

             //Grey's Anatomy. // St. Jude's Hospital

        }




}