import React, { useState, useEffect, useRef, useMemo } from "react";
import "./UpdatePrompt.css";

function UpdatePrompt() {
  const [phase, setPhase] = useState("prompt"); // 'prompt', 'declined', 'updating', 'completed'
  const [progress, setProgress] = useState(0);
  const [displayLog, setDisplayLog] = useState("");
  const [isFlashing, setIsFlashing] = useState(false);
  const timeoutsRef = useRef([]);
  const schedulingStarted = useRef(false);
  const schedulePoint = useRef(0);

  const copyToUpdates = [
    "Copying kernel32.dll to C:\\Lab217\\System\\Updates\\",
    "Copying userconfig.ini to C:\\Lab217\\System\\Updates\\",
    "Copying system_patch_021.bin to C:\\Lab217\\System\\Updates\\",
    "Copying framework.dll to C:\\Lab217\\System\\Updates\\",
    "Copying security_protocols.sys to C:\\Lab217\\System\\Updates\\",
    "Copying gui_assets.dat to C:\\Lab217\\System\\Updates\\",
    "Copying core_instructions.reg to C:\\Lab217\\System\\Updates\\",
    "Copying memory_map.cfg to C:\\Lab217\\System\\Updates\\",
    "Copying update_loader.exe to C:\\Lab217\\System\\Updates\\",
    "Copying hotfix_patch_1174.log to C:\\Lab217\\System\\Updates\\",
    "Copying diagnostics_toolkit.exe to C:\\Lab217\\System\\Updates\\",
    "Copying registry_backup.reg to C:\\Lab217\\System\\Updates\\",
    "Copying error_handler.sys to C:\\Lab217\\System\\Updates\\",
    "Copying autoexec.bat to C:\\Lab217\\System\\Updates\\",
    "Copying boot_config.cfg to C:\\Lab217\\System\\Updates\\",
    "Copying driver_cache.idx to C:\\Lab217\\System\\Updates\\",
    "Copying permissions_matrix.dat to C:\\Lab217\\System\\Updates\\",
    "Copying hardware_profile.xml to C:\\Lab217\\System\\Updates\\",
    "Copying log_cleanup.sh to C:\\Lab217\\System\\Updates\\",
    "Copying software_update.pkg to C:\\Lab217\\System\\Updates\\",
    "Copying network_config.json to C:\\Lab217\\System\\Updates\\",
    "Copying system_event_log.log to C:\\Lab217\\System\\Updates\\",
    "Copying shell_extensions.dll to C:\\Lab217\\System\\Updates\\",
    "Copying encryption_key.pub to C:\\Lab217\\System\\Updates\\",
    "Copying update_manifest.xml to C:\\Lab217\\System\\Updates\\",
  ];

  const downloadingProcesses = [
    "Connecting to Lab217 update server...",
    "Resolving download path...",
    "Fetching update metadata...",
    "Calculating package size...",
    "Verifying internet connectivity...",
    "Downloading core framework components...",
    "Retrieving security definitions...",
    "Checking available disk space...",
    "Downloading encrypted update package...",
    "Validating checksum for integrity...",
    "Writing update buffer to disk...",
    "Resolving dependency conflicts...",
    "Verifying compatibility with system architecture...",
    "Assembling package manifest...",
    "Pausing non-essential processes...",
    "Decrypting server handshake...",
    "Fetching remote signature file...",
    "Preparing compressed transfer stream...",
  ];

  const verifyingSignaturesProcesses = [
    "Retrieving certificate authority keys...",
    "Decrypting public key signatures...",
    "Cross-checking authentication records...",
    "Scanning package hash values...",
    "Comparing checksums with trusted registry...",
    "Validating RSA key integrity...",
    "Checking for unauthorized modifications...",
    "Running cryptographic verification...",
    "Analyzing hash discrepancies...",
    "Verifying chain of trust...",
    "Confirming digital signature timestamps...",
    "Ensuring compliance with security policies...",
    "Testing for expired authentication tokens...",
    "Recomputing SHA-256 digest...",
    "Re-evaluating asymmetric key validity...",
    "Validating TLS certificate constraints...",
    "Ensuring tamper-proof file storage...",
  ];

  const decryptingFilesProcesses = [
    "Initializing decryption engine...",
    "Reading AES-256 key from secure storage...",
    "Generating session decryption key...",
    "Verifying private key signature...",
    "Decoding update payload headers...",
    "Decrypting compressed file blocks...",
    "Removing redundant encryption layers...",
    "Extracting binary contents...",
    "Applying symmetric decryption algorithms...",
    "Checking encrypted sector alignment...",
    "Verifying decryption accuracy...",
    "Reassembling plaintext data streams...",
    "Scanning for data corruption...",
    "Decrypting file allocation table...",
    "Ensuring proper bitwise integrity...",
    "Finalizing file decryption pipeline...",
  ];

  const updatingMoleculeStructuresProcesses = [
    "Recompiling molecular lattice data...",
    "Synchronizing atomic vector mappings...",
    "Rebuilding molecule metadata indices...",
    "Validating structural integrity models...",
    "Applying quantum state optimizations...",
    "Aligning energy field matrices...",
    "Stabilizing polymeric configurations...",
    "Processing molecular affinity calculations...",
    "Adjusting atomic resonance frequencies...",
    "Performing electron redistribution analysis...",
    "Reconstructing protein folding pathways...",
    "Calibrating synthetic compound properties...",
    "Updating atomic structure catalog...",
    "Checking isotope stability parameters...",
    "Integrating quantum coherence corrections...",
    "Cross-referencing molecular pattern archives...",
    "Rewriting structural hierarchy definitions...",
  ];

  const optimizingAlgorithmsProcesses = [
    "Profiling execution pathways...",
    "Refining memory allocation models...",
    "Recalculating performance metrics...",
    "Reducing algorithmic complexity...",
    "Compiling efficiency benchmarks...",
    "Applying heuristic optimization techniques...",
    "Detecting redundant calculations...",
    "Implementing caching strategies...",
    "Analyzing system bottlenecks...",
    "Rewriting loop unrolling logic...",
    "Reducing computational overhead...",
    "Updating AI inference models...",
    "Refactoring data sorting functions...",
    "Applying neural network pruning...",
    "Eliminating unnecessary recursive calls...",
    "Optimizing matrix transformation logic...",
    "Aligning multi-threaded execution pipelines...",
  ];

  const extractingFilesProcesses = [
    "Unpacking compressed data blocks...",
    "Verifying extracted file integrity...",
    "Decompressing encrypted archives...",
    "Allocating disk space for extracted files...",
    "Extracting core system components...",
    "Unzipping software libraries...",
    "Rebuilding file allocation table...",
    "Restoring system module dependencies...",
    "Reconstructing file hierarchies...",
    "Registering extracted DLLs...",
    "Checking extraction logs for errors...",
    "Validating extracted firmware signatures...",
    "Decompressing resource assets...",
    "Rebuilding compressed registry entries...",
    "Finalizing file extraction sequence...",
    "Removing redundant extracted files...",
  ];

  const applyingPatchesProcesses = [
    "Reading patch manifest...",
    "Validating patch signatures...",
    "Applying incremental security updates...",
    "Replacing outdated system files...",
    "Patching critical vulnerabilities...",
    "Merging patched kernel modules...",
    "Adjusting software dependencies...",
    "Recompiling updated source code...",
    "Flushing outdated configurations...",
    "Testing patched functionality...",
    "Verifying version consistency...",
    "Deploying stability improvements...",
    "Fixing memory leak vulnerabilities...",
    "Optimizing patched execution routines...",
    "Finalizing system patch installation...",
  ];

  const calibratingHardwareProcesses = [
    "Detecting connected peripherals...",
    "Adjusting driver compatibility settings...",
    "Synchronizing I/O device parameters...",
    "Optimizing signal transmission rates...",
    "Reconfiguring power management settings...",
    "Updating firmware control logic...",
    "Adjusting clock synchronization...",
    "Rebalancing memory bus latency...",
    "Tuning audio output channels...",
    "Aligning sensor input thresholds...",
    "Rewriting device configuration profiles...",
    "Verifying CPU core temperature readings...",
    "Fine-tuning GPU performance profiles...",
    "Testing network latency optimizations...",
    "Finalizing hardware calibration routines...",
  ];

  const syncingWithCloudProcesses = [
    "Establishing secure connection...",
    "Verifying cloud authentication token...",
    "Uploading local update logs...",
    "Downloading latest configuration files...",
    "Synchronizing encrypted storage data...",
    "Fetching remote patch dependencies...",
    "Resolving cloud sync conflicts...",
    "Comparing local and remote file versions...",
    "Encrypting data transmission...",
    "Confirming data integrity check...",
    "Sending heartbeat ping to server...",
    "Aligning remote cache with local state...",
    "Refreshing cloud authentication keys...",
    "Applying cloud-based settings optimizations...",
    "Finalizing cloud sync process...",
  ];

  const finalizingInstallationProcesses = [
    "Finalizing system update logs...",
    "Cleaning up temporary files...",
    "Rebuilding software registry entries...",
    "Resetting modified system permissions...",
    "Reloading kernel security parameters...",
    "Running final integrity verification...",
    "Completing dependency resolution...",
    "Updating rollback restore points...",
    "Archiving previous system state...",
    "Confirming successful patch integration...",
    "Restarting essential background services...",
    "Optimizing boot sequence...",
    "Recompiling system performance indices...",
    "Preparing for restart...",
    "Finalizing update deployment...",
  ];

  // Schedule starts after 2000ms so that gibberish shows while the bar builds.
  const schedule = useMemo(
    () => [
      {
        delay: 0,
        progress: 10,
        message: "Downloading update package...",
        pause: 1000,
      },
      {
        delay: 4000,
        progress: 20,
        message: "Copying files...",
        pause: 1000,
      },
      {
        delay: 6000,
        progress: 30,
        message: "Decrypting files...",
        pause: 1000,
      },
      { delay: 7000, progress: 33, message: "Extracting files...", pause: 500 },
      { delay: 8000, progress: 40, message: "Applying patches...", pause: 500 },
      {
        delay: 10000,
        progress: 60,
        message: "Updating molecule structures...",
        pause: 1000,
      },
      {
        delay: 11000,
        progress: 65,
        message: "Optimizing algorithms...",
        pause: 500,
      },
      {
        delay: 12000,
        progress: 75,
        message: "Calibrating hardware interface...",
        pause: 500,
      },
      {
        delay: 13000,
        progress: 85,
        message: "Syncing with cloud server...",
        pause: 500,
      },
      {
        delay: 14000,
        progress: 95,
        message: "Finalizing installation...",
        pause: 500,
      },
      {
        delay: 14500,
        progress: 99,
        message: "Cleaning up temporary files...",
        pause: 500,
      },
      {
        delay: 15000,
        progress: 100,
        message: "Update successful",
        pause: 2000,
      },
    ],
    []
  );

  const getRandomSubProcess = (phase) => {
    switch (phase) {
      case "Downloading update package...":
        return downloadingProcesses[
          Math.floor(Math.random() * downloadingProcesses.length)
        ];
      case "Copying files...":
        return copyToUpdates[Math.floor(Math.random() * copyToUpdates.length)];
      case "Decrypting files...":
        return decryptingFilesProcesses[
          Math.floor(Math.random() * decryptingFilesProcesses.length)
        ];
      case "Extracting files...":
        return extractingFilesProcesses[
          Math.floor(Math.random() * extractingFilesProcesses.length)
        ];
      case "Applying patches...":
        return applyingPatchesProcesses[
          Math.floor(Math.random() * applyingPatchesProcesses.length)
        ];
      case "Updating molecule structures...":
        return updatingMoleculeStructuresProcesses[
          Math.floor(Math.random() * updatingMoleculeStructuresProcesses.length)
        ];
      case "Optimizing algorithms...":
        return optimizingAlgorithmsProcesses[
          Math.floor(Math.random() * optimizingAlgorithmsProcesses.length)
        ];
      case "Calibrating hardware interface...":
        return calibratingHardwareProcesses[
          Math.floor(Math.random() * calibratingHardwareProcesses.length)
        ];
      case "Syncing with cloud server...":
        return syncingWithCloudProcesses[
          Math.floor(Math.random() * syncingWithCloudProcesses.length)
        ];
      case "Finalizing installation...":
        return finalizingInstallationProcesses[
          Math.floor(Math.random() * finalizingInstallationProcesses.length)
        ];
      default:
        return " ";
    }
  };

  // Clear all timeouts on unmount.
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  // Flash gibberish when not in a paused state.
  useEffect(() => {
    let flashInterval;

    if (phase === "updating" && isFlashing) {
      flashInterval = setInterval(() => {
        // Ensure schedulePoint is within the valid range
        if (schedulePoint.current < schedule.length) {
          const currentStep = schedule[schedulePoint.current].message; // Get the main phase
          setDisplayLog(getRandomSubProcess(currentStep)); // Get relevant sub-process
        }
      }, 80);
    }
    return () => clearInterval(flashInterval);
  }, [phase, isFlashing]);

  // Start scheduling only once when phase becomes 'updating'
  useEffect(() => {
    if (phase === "updating" && !schedulingStarted.current) {
      schedulingStarted.current = true;
      setProgress(0);

      schedule.forEach((step, index) => {
        const timeout = setTimeout(() => {
          setIsFlashing(false); // Stop sub-process flipping temporarily
          setDisplayLog(step.message); // Show main process message
          schedulePoint.current = index; // Track current step

          let currentProgress = progress;
          const targetProgress = step.progress;

          // Start gradually increasing the progress bar as soon as sub-process flipping starts
          const progressInterval = setInterval(() => {
            setProgress((prev) => {
              if (prev >= targetProgress) {
                clearInterval(progressInterval); // Stop once target is reached
                return targetProgress;
              }
              return prev + (targetProgress - currentProgress) / 20; // Smooth scaling
            });
          }, step.pause / 20); // Controls how fast it reaches the target

          timeoutsRef.current.push(progressInterval);

          // ✅ Start flashing sub-process messages **BEFORE** increasing progress
          setIsFlashing(true);

          if (index < schedule.length - 1) {
            const resumeTimeout = setTimeout(() => {
              setIsFlashing(true); // Continue flipping sub-processes
            }, step.pause);
            timeoutsRef.current.push(resumeTimeout);
          } else {
            // Final step: after pause, mark update as completed
            const finalTimeout = setTimeout(() => {
              setPhase("completed");
              setDisplayLog("");
            }, step.pause);
            timeoutsRef.current.push(finalTimeout);
          }
        }, step.delay);
        timeoutsRef.current.push(timeout);
      });
    }
  }, [phase, schedule]);

  const handleUpdate = () => setPhase("updating");
  const handleLater = () => setPhase("declined");
  const handleReboot = () => {
    // Insert reboot functionality here.
    console.log("Rebooting...");
    window.location.href = "/maker_new";
  };

  if (phase === "prompt" || phase === "declined") {
    return (
      <div className="update-prompt-overlay">
        <div className="update-prompt-container">
          <p className="update-prompt-text">
            It looks like there's a new update for the Digital Molecule Maker.
            Would you like to update now?
          </p>
          {phase === "declined" && (
            <p style={{ color: "red" }}>
              It's highly encouraged to update to the current software.
            </p>
          )}
          <div className="update-button-container">
            <button onClick={handleUpdate} style={{ marginRight: "10px" }}>
              Yes, update
            </button>
            <button onClick={handleLater}>Later</button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "updating" || phase === "completed") {
    return (
      <div className="update-prompt-overlay">
        <div className="update-prompt-container">
          <p className="updating-header">
            {phase === "updating" ? "Updating..." : "Update complete!"}
          </p>
          <div
            style={{
              width: "100%",
              background: "#eee",
              height: "20px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                background: "#76c7c0",
                height: "100%",
                transition: "width 0.5s ease",
              }}
            ></div>
          </div>
          <p className="log-text">{displayLog}</p>
          {phase === "completed" && (
            <button onClick={handleReboot}>Reboot</button>
          )}
        </div>
      </div>
    );
  }

  return null;
}

export default UpdatePrompt;
