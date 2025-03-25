from setuptools import setup, find_packages

setup(
    name="ChronoFyx",
    version="1.0.0",
    author="Blac-art",
    description="Decentralized, blockchain-powered synchronization system.",
    packages=find_packages(),
    install_requires=[
        "flask",
        "flask-cors",
        "requests",
        "cryptography",
        "p2pnetwork",
        "ipfshttpclient",
        "jsonschema",
        "loguru"
    ],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.7',
)
